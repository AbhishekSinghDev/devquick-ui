import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devquickui.live/"),

  title: {
    default: "DevQuick UI - Boost Your React Development",
    template: "%s - DevQuick UI",
  },
  authors: {
    name: "DevQuick UI - Abhishek Singh and Himanshu Kumar Dutt",
  },
  description:
    "Boost your React and Next.js development with DevQuick UI's collection of pre-built, customizable components. Enhance developer productivity using free, ready-made sections and components for your Next.js projects. Seamlessly integrate pre-designed components and clone popular website layouts with Shadcn/UI and Tailwind CSS.",
  openGraph: {
    title: "DevQuick UI - Boost Your React Development",
    description:
      "Boost your React and Next.js development with DevQuick UI's collection of pre-built, customizable components. Enhance developer productivity using free, ready-made sections and components for your Next.js projects. Seamlessly integrate pre-designed components and clone popular website layouts with Shadcn/UI and Tailwind CSS.",
    url: "https://www.devquickui.live/",
    siteName: "DevQuick UI",
    images: "/logo/devquickui-icon.png",
    type: "website",
  },

  keywords: [
    "Next.js UI components",
    "React components library",
    "Pre-built React components",
    "Boost developer productivity",
    "Shadcn/UI components",
    "Tailwind CSS components",
    "Next.js templates",
    "Clone website designs",
    "Free React components",
    "React productivity tools",
    "Customizable React components",
    "Next.js and Tailwind CSS",
    "React UI library",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head> */}
      <body className={GeistSans.className}>
        <Providers>
          <main className="inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
