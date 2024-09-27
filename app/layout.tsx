import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import SideProfile from "@/components/sideProfile";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "relative min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex h-dvh overflow-hidden">
            <div className="hidden md:flex flex-col h-full px-4 w-72 min-w-72 max-w-72 justify-center items-center z-10">
              <SideProfile />
            </div>
            <div className="relative flex flex-col flex-grow z-10">
              <div className="flex w-full justify-center">
                <Navbar />
              </div>
              <main className="bg-transparent md:bg-zinc-300/20 md:dark:bg-zinc-600/10 pt-20 md:pt-0 px-2 md:px-6 flex-grow md:rounded-tl-[24px] overflow-y-auto">
                {children}
              </main>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        </Providers>
        <div className="fixed top-0 left-0 bg-slate-700/30 dark:bg-white/10  size-32 blur-3xl rounded-full" />
        <div className="fixed top-1/3 left-1/4 bg-purple-700/30 dark:bg-orange-300/10  size-64 blur-3xl rounded-full" />
        <div className="fixed right-10 bottom-10 bg-gray-700 dark:bg-blue-600  size-20 blur-3xl rounded-full" />
      </body>
    </html>
  );
}
