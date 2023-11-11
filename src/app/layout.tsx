"use client";

import { Inter } from "next/font/google";
import "../styles/font.css";
import { ProductsProvider } from "@/context";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ProductsProvider>{children}</ProductsProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
