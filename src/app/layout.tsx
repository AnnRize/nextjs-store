import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Providers from "./providers";
import { Header } from "@/components";
import "./globals.scss";

const oswald = Oswald({ subsets: ["latin"], weight: ["600"] });

export const metadata: Metadata = {
   title: "Store",
   description: "Store",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={oswald.className}>
            <Providers>
               <Header />
               <main>{children}</main>
            </Providers>
         </body>
      </html>
   );
}
