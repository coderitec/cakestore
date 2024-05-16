import { Roboto } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "./components/TopNavbar";
import BottomNavbar from "./components/BottomNavbar";
import Footer from "./components/Footer";

const sora = Roboto({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "welcome to sweet addiction",
  description: "everything cake is here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 ${sora.className}`}>
        <div className="fixed inset-x-0 z-[1] bg-white border-b-4 border-b-gray-200">
        <TopNavbar />
        <BottomNavbar />
        </div>
        <div className="relative top-[140px] min-h-screen">

        {children}
        

        </div>

        <Footer />
        </body>
    </html>
  );
}
