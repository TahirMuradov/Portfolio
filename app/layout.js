import { Inter } from "next/font/google";
import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss=true;
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Backtotop from "@/components/BackToTop/Backtotop";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
   
     
      <body className={inter.className}>
      <Header/>      
        {children}
        <Backtotop/>
     <Footer/>
        
        </body>
    </html>
  );
}
