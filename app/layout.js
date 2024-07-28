import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import LanguageToggleProvider from "./components/LanguageSelect/LanguageToggleProvider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '600', '700' ],
  variable: '--font-poppins',
});

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700' ],
  variable: '--font-inter',
});

export const metadata = {
  title: "Cetirc | Experience Cutting-Edge Palm Vein Identity Service",
  description: "Experience Cutting-Edge Palm Vein Identity Service",
};

export default function RootLayout({ children }) {

  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${inter.variable}`}>
        <LanguageToggleProvider>
          <Header />
          {children}
          <Footer />
        </LanguageToggleProvider>
      </body>
    </html>
  );
}
