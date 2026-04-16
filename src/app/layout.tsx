import type { Metadata } from "next";
import "@/styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Header";
const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Cordinova"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">          
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen w-full flex-col">
              <Header />
              <main className="flex flex-1 flex-col px-4 pt-10 xl:px-8">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
    </html>
  );
}
