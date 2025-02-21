"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "@/src/context/AuthContext";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
