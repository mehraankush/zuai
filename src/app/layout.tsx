import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/common/Sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZuAI",
  description: "ZuAI - The Ultimate AI-Powered Study Buddy for IB Students | Better than Save My Exams and ChatGPT | Interactive Learning Tools, Customized Mock Exams, Detailed Question Banks, Homework Help, and Assignment Assistance to Ace Your IB Exams!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex  bg-backround`}>
        <Sidebar/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
