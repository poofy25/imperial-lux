import type { Metadata } from "next";
import { Raleway , Inter } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/Navbar/NavBar'
import Footer from "@/components/Footer/Footer"


const RalewayFont = Raleway({ subsets: ["latin"], variable: '--font-raleway' });
const InterFont = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "ImperialLux",
  description: "The ImperialLux company's main activity is Repairs and Interior Design of apartments, houses, commercial spaces, home furnishing. Our specialists have extensive experience in these fields.  ",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {




  return (
    <html lang='en' >
      <body className={`${RalewayFont.variable} ${InterFont.variable}`}>
          <NavBar/>
          {children}
          <Footer/>
      </body>
    </html>
  );
}