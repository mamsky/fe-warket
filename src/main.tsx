import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import DarkMode from "./components/ui/dark-mode.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
      <Toaster position="bottom-right" reverseOrder={false} />
      <DarkMode />
    </StrictMode>
  </QueryClientProvider>
);
