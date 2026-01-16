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

const postUrl = async (url: string): Promise<TShortenLink> => {
  try {
    const response = await fetch(
      "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `url=${encodeURIComponent(url)}`,
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
      id: crypto.randomUUID(),
      href: url,
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
    queryFn: async () => [await postUrl("")],
    enabled: false,
  });

export function useCreateShorten() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postUrl,
    onSuccess(data) {
      queryClient.setQueryData(shortenQueryOptions().queryKey, (oldData) =>
        oldData ? [data, ...oldData] : [data],
      );
    },
  });
}

export function useShorten() {
  return useQuery(shortenQueryOptions());
}
