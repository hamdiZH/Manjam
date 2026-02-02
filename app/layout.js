import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisclaimerPopup from "@/components/DisclaimerPopup";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Manjam - Invest with Purpose",
  description:
    "World’s #1 Swiss Shariah-compliant digital asset ecosystem; built on institutional benchmarks for the digital asset age.",
  icons: {
    icon: "/manjam-icon.jpg",
    shortcut: "/manjam-icon.jpg",
    apple: "/manjam-icon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <div className="sticky top-0 z-50 bg-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[35px]">
          <Navbar />
        </div>
        {children}
        <Footer />
        <DisclaimerPopup />
      </body>
    </html>
  );
}
