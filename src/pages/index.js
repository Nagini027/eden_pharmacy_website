import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Explore from "@/components/Explore";
import About from "@/components/About";
import Ingredients from "@/components/Ingredients";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="">
      <div className="">
        <Navbar />
        <Explore />
        <div className="md:-mt-24">
          <About />
        </div>
        <div className="mt-3">
          <Ingredients />
        </div>
      </div>
    </div>
  );
}
