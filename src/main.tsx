import App from "@/app";
import "@/styles.css";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import {
  PersistQueryClientProvider,
  removeOldestQuery,
} from "@tanstack/react-query-persist-client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
      // retry only if error is not cors
    },
  },
});

const storagePersister = createAsyncStoragePersister({
  storage: localStorage,
  retry: removeOldestQuery,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: storagePersister,
        maxAge: 1000 * 60 * 60 * 24, // 24 hours
      }}
    >
      <App />
    </PersistQueryClientProvider>
  </StrictMode>
);
