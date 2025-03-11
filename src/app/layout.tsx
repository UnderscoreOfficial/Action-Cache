import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider } from "@mantine/core";
import "./globals.css";
import '@mantine/core/styles.css';
import { ModalsProvider } from "@mantine/modals";

const inter = Inter({
  variable: "--font-inter",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Action Cache",
  description: "Manage keyboard shortcuts & cli commands for various applications.",
};

const theme = createTheme({
  primaryColor: "white",
  autoContrast: true,
  colors: {
    "white": [
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
      "#ffffff",
    ]
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MantineProvider theme={theme} forceColorScheme="dark">
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
