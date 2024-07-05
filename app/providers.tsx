import React from "react";

import NextTopLoader from "nextjs-toploader";
import { ThemeProvider } from "@/context/theme-provider";

import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { Toaster } from "@/components/ui/toaster";

interface ProviderProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextTopLoader />
      <Header />
      {children}
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
};

export default Providers;
