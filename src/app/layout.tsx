import { Providers } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Board",
  description: "Created by Kuze",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="my-20">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
