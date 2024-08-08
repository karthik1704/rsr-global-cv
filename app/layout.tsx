import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";

import { cookies } from "next/headers";



const poppins = Poppins({
  style:['normal'],
  display: 'swap', 
  adjustFontFallback: false,
  subsets:['latin'],
  weight:['400','700'],
  variable:'--font-poppins',
  
})


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
