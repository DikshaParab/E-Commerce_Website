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
        <div>
            <h2>Product Filter</h2>
            <input type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}/>

            <select value={category}
            onChange={(event) => onCategoryChange(event.target.value)}>
                <option value="All">All</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>
                        {cat}
                    </option>
                ))}
            </select>

            <p>Search: {search} </p>
            <p>Category: {category} </p>
        </div>
    );
};

export default ProductFilter;