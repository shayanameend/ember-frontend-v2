import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { RootProvider } from "~/app/provider";
import { fonts } from "~/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_NAME} - ${process.env.NEXT_PUBLIC_APP_DESCRIPTION}`,
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fonts.playfairDisplay.variable} font-sans antialiased`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
