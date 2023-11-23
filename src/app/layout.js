import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Goblogs | The best blog app",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          <div className="wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
