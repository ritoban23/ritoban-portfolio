import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { DATA } from "@/data/resume";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingNav from "@/components/floating-nav";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: DATA.name,
  description: DATA.heroDescription,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <main>{children}</main>
          <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pb-20 transition-colors duration-300">
            <div className="flex flex-row mx-auto max-w-7xl px-6 py-12 md:flex md:items-start md:justify-between">
              <div className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  © {new Date().getFullYear()} {DATA.name}.
                </p>
              </div>
            </div>
          </footer>
          <FloatingNav />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
