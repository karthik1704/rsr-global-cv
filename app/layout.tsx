import type { Metadata } from "next";
// import { Poppins} from "next/font/google";
import localFont  from 'next/font/local'
import "./globals.css";

import { cookies } from "next/headers";



// export const poppins = Poppins({
//   style:['normal'],
//   display: 'swap', 
//   adjustFontFallback: false,
//   subsets:['latin'],
//   weight:['400','700'],
//   variable:'--font-poppins',
  
// })

const poppins = localFont({
  src: [
    {
      path: 'fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    
    },
    {
      path: 'fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
   
  ],
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
