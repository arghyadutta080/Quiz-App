import type { Metadata } from "next";
import localFont from "next/font/local";
import QueryClientProvider from "@/components/common/QueryClientProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Test your knowledge with our interactive quiz!",
  icons: {
    icon: "/assets/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500`}
      >
        <QueryClientProvider>
          <main className="flex justify-center items-center min-h-screen p-4">
            {children}
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
