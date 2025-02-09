import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss=true;
import Header from "@/components/Header/Header";
import Backtotop from "@/components/BackToTop/Backtotop";
import "../components/Education/education.scss"
import iconMeta from "../public/img/124434370.jpeg"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muradov Tahir Full-Stack Web Development(c#)",
  description: "Muradov Tahir",
 
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
   
     
      <body className={inter.className}>
      <Header/>      
        <Backtotop/>
        {children}
    
        
        </body>
    </html>
  );
}
