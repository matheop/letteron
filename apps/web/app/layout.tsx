import type { Metadata } from "next";
import "@letteron/design-system/tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "LetterOn",
  description: "Everything you want to read, in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
