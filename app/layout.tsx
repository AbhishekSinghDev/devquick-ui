import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devquickui.live/"),

  title: {
    default: "devquick/ui",
    template: "%s - devquick/ui",
  },
  authors: {
    name: "devquick/ui - abhishek singh and himanshu kumar dutt.",
  },
  description: "",
  openGraph: {
    title: "devquick/ui",
    description: "",
    url: "https://www.devquickui.live/",
    siteName: "devquick/ui",
    images: "/logo/devquickui-icon.png",
    type: "website",
  },

  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
