"use client"

import { useState } from "react";

const ProductFilter = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    return (
        <div>
            <h2>Product Filter</h2>
            <input type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}/>

            <select value={category}
            onChange={(event) => setCategory(event.target.value)}>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Jewellery">Jewellery</option>
            </select>

            <p>Search: </p>
            <p>Category: </p>
        </div>
    );
};

export default ProductFilter;