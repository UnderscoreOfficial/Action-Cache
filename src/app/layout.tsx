import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ColorSchemeScript, createTheme, mantineHtmlProps, MantineProvider } from "@mantine/core";
import "./globals.css";
import '@mantine/core/styles.css';
import { ModalsProvider } from "@mantine/modals";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shortcut Manager",
  description: "Manage keyboard shortcuts for various applications.",
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
       <ColorSchemeScript defaultColorScheme="dark"/> 
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <ModalsProvider>{children}</ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
