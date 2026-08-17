"use client";

import { use, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if(!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data = await response.json();

                const formatted: Product[] = data.map((item:any) => ({
                    id: item.id,
                    name: item.title,
                    price: item.price,
                    category: item.category,
                }));

                setProducts(formatted);
            } catch(err) {
                setError("Could not load products. Please try again later.");
            } finally{
                setLoading(false);
            }
        };
        fetchProducts();
    }, [])

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
                <h1 className="text-3xl font-bold text-teal-500">Our Products</h1>
            </section>

            <ProductFilter
            search={search}
            category={category}
            onSearchChange={setSearch}
            onCategoryChange={setCategory}/>

            <div className="max-w-6xl mx-auto px-6 pb-10">
                {loading && <p className="text center py-10">Loading Products...</p>}
                {error && <p className="text center py-10 text-red-500">{error}</p>}

                {!loading && !error && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} name={product.name} price={product.price} />
                        ))}
                    </div>
                )}                
            </div>
        </main>
        <Footer/>
        </>
    );
}