import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RHF + Tailwind",
  description: "RHF + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex w-full min-h-screen bg-gray-100 justify-center items-center'>
        {children}
      </body>
    </html>
  );
}
