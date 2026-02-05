// import { Inter, Syne } from "next/font/google";
import "../styles/globals.css"; // Path sahi karlein
import Header from "@/components/layout/header"; // Import Header
import Footer from "@/components/layout/footer"; // Import Footer
import SmoothScroll from "@/components/elements/SmoothScroll";

// const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "700", "800"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" > 
    {/* className={`${inter.variable} ${syne.variable}`} */}
      <body className="antialiased bg-black text-white">
        <Header /> 
        <main>  <SmoothScroll>
          {children}
        </SmoothScroll></main>
        <Footer />
      </body>
    </html>
  );
}

