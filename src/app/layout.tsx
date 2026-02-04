// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://chat-bots-psi.vercel.app"),

  title: {
    default: "DemoBots — Chatbot Demonstrations",
    template: "%s | DemoBots",
  },

  description:
    "Interactive chatbot demonstrations: FAQ bot, Support Assistant, Leads Qualification, Sales Assistant and Test Bot demos.",

  openGraph: {
    type: "website",
    url: "https://chat-bots-psi.vercel.app/",
    siteName: "DemoBots",
    title: "DemoBots — Chatbot Demonstrations",
    description:
      "Interactive chatbot demonstrations: FAQ bot, Support Assistant, Leads Qualification, Sales Assistant and Test Bot demos.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DemoBots — Chatbot Demonstrations",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DemoBots — Chatbot Demonstrations",
    description:
      "Interactive chatbot demonstrations: FAQ bot, Support Assistant, Leads Qualification, Sales Assistant and Test Bot demos.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
