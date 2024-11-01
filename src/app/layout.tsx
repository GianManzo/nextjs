import type { Metadata } from "next";

import "./globals.css";
import Menu from "@/components/Menu/menu";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
