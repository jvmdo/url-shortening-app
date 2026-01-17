import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import z from "zod";

const ApiResponseSchema = z.union([
  z.object({
    result_url: z.string(),
  }),
  z.object({
    error: z.string(),
  }),
]);

type TShortenLink = {
  id: string;
  href: string;
  shorten: string;
};

const createShorten = async ({
  id,
  href,
}: Omit<TShortenLink, "shorten">): Promise<TShortenLink> => {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `url=${encodeURIComponent(href)}`,
      },
    );

    if (response.status === 403 && response.type === "cors") {
      throw new TypeError("CORS");
    }

    const data = await response.json();
    const parsedData = ApiResponseSchema.parse(data);

    if ("error" in parsedData) {
      throw new Error(parsedData.error);
    }

    return {
      id,
      href,
      shorten: parsedData.result_url,
    };
  } catch (error) {
    // CORS error detected
    if ((error as Error).name === "TypeError") {
      throw {
        corsError: true,
        name: "CORS restrictions",
        message: "Follow the steps on the CORS Anywhere page, then try again.",
      };
    }
    throw error;
  }
};

export const shortenQueryOptions = () =>
  queryOptions({
    queryKey: ["shorten"],
    queryFn: async () => [await createShorten({ id: "", href: "" })],
    enabled: false,
  });

export function useCreateShorten() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createShorten,
    onMutate({ id, href }) {
      const optimisticData: TShortenLink = {
        id,
        href,
        shorten: "https://cleanuri.com/******",
      };
      queryClient.setQueryData(shortenQueryOptions().queryKey, (oldData) =>
        oldData ? [optimisticData, ...oldData] : [optimisticData],
      );
    },
    onSuccess(newLink) {
      queryClient.setQueryData(shortenQueryOptions().queryKey, (oldData) => {
        const data = oldData?.filter(({ id }) => id !== newLink.id);
        return data ? [newLink, ...data] : [newLink];
      });
    },
    onError(_, variables) {
      queryClient.setQueryData(shortenQueryOptions().queryKey, (oldData) => {
        return oldData?.filter(({ id }) => id !== variables.id);
      });
    },
  });
}

export function useShorten() {
  return useQuery(shortenQueryOptions());
}
