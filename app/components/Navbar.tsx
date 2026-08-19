"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    const linkClass = (path: string) => 
        pathname === path
            ? "text-teal-700 font-semibold"
            : "text-teal-600 hover:text-teal-700";

    return (
        <nav className="flex gap-4 px-8 py-3 font-medium">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/products" className={linkClass("/products")}>Products</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>
        </nav>
    );
};

export default Navbar;