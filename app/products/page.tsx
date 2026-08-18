"use client";

import { useEffect, useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import useFetch from "../hooks/useFetch";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}

interface RawApipProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

export default function ProductsPage() {
    const { data, loading, error } = useFetch<RawApipProduct[]>(
        "https://fakestoreapi.com/products"
    )

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const products: Product[] = (data ?? []).map((item) => ({
        id: item.id,
        name: item.title,
        price: item.price,
        category: item.category,
        image: item.image,
    }));

    const uniqueCategories = Array.from(new Set(products.map((p) => p.category)));
    
    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || product.category === category;
        return matchesSearch && matchesCategory;
    });

    return (
        <>
        <Header/>
        <main>
            <section className="text-center py-6">
                <h1 className="text-3xl font-bold text-teal-700">Our Products</h1>
            </section>

            <ProductFilter
            search={search}
            category={category}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}
            categories={uniqueCategories}/>

            <div className="max-w-6xl mx-auto px-6 pb-10">
                {loading && <p className="text-center py-10">Loading Products...</p>}
                {error && <p className="text-center py-10 text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} 
                            name={product.name} 
                            price={product.price} 
                            image={product.image}/>
                        ))}
                    </div>
                )}                
            </div>
        </main>
        <Footer/>
        </>
    );
}