"use client";

import { useRouter } from "next/navigation";

const HomeButton = () => {
    const router = useRouter();

    const handleProducts = () => {
        router.push("/products");
    };

    const handleAbout = () => {
        router.push("/about");
    };

    return (
        <div className="flex justify-center gap-4 mt-6">
            <button onClick={handleProducts}
            className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Products
            </button>
            
            <button onClick={handleAbout}
            className="px-6 py-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300">
                About Us
            </button>
        </div>
    );
};

export default HomeButton;