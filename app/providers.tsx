import Header from "@/components/shared/header";
import { ThemeProvider } from "@/context/theme-provider";
import NextTopLoader from "nextjs-toploader";
import React from "react";

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
    </ThemeProvider>
  );
};

export default Providers;
