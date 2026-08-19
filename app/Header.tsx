"use client";

import Navbar from "./components/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const linkClass = (path: string) => 
      pathname === path
            ? "text-2xl text-teal-800 font-bold"
            : "text-2xl text-teal-800 font-bold hover:text-teal-600";
  
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gradient-to-b from-teal-50 to-white shadow-sm sticky top-0 z-10">
      <Link href="/" className={linkClass("/")}>Horizon</Link>
      <Navbar/>
    </header>
  );
};

export default Header;

      <h1 className="text-2xl font-bold text-teal-800">Horizon</h1>
