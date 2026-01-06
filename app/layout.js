import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    "Join a community that believes in sustainable investing. Make your money work for both your future and the planet's future.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[35px]">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
