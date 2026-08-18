"use client"

import { useRef, useEffect } from "react";

interface ProductFilterProps {
    search: string;
    category: string;
    onSearchChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
    categories: string[];
}

const ProductFilter = ({
    search, category, onSearchChange, onCategoryChange, categories}: ProductFilterProps) => {
        const searchInputRef = useRef<HTMLInputElement>(null);

        useEffect(() => {
            searchInputRef.current?.focus();
        }, []);

    return (
        <div className="max-w-6xl mx-auto px-6 pb-6 flex-col sm:flex-row sm:items-center gap-4">
            <h2 className="text-lg font-semibold text-teal-600 mb-3">Product Filter</h2>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-3">
                <input ref={searchInputRef}
                type="text"
                placeholder="Search Products..."
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                className="w-full sm:w-64 px-4 py-2 border rounded-md text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"/>
                
                <select value={category}
                onChange={(event) => onCategoryChange(event.target.value)}
                className="w-full sm:w-50 px-4 py-2.5 border rounded-md text-teal-700 bg-white focus:outline-none focus:ring-teal-500">
                    <option value="All">All</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>
                


            <p className="text-sm text-teal-500">
                Showing results for {" "}
                <span className="font-medium text-teal-700">
                    {search ? `"${search}"` : "all products"}
                </span> {" "}
                in <span className="font-medium text-teal-700">{category}</span>
            </p>
        </div>
    );
};

export default ProductFilter;