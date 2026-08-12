import Header from "../Header";
import Footer from "../Footer";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";

const Products = [
  {id:1, name: "Wireless Mouse", price:799, category: "Electronics"},
  {id:2, name: "Rose-gold Bracelet", price: 4999, category:"Jewellery"},
  {id:3, name: "Wireless Keyboard", price: 1299, category: "Electronics"},
  {id:4, name: "Summer Dress", price: 1499, category: "Clothes"},
  {id:5, name: "USB-C Hub", price: 999, category: "Electronics"},
  {id:6, name: "Gold Necklace", price: 75000, category: "Jewellery"},
  {id:7, name: "White Skirt", price: 899, category: "Clothes"},
]

export default function ProductsPage() {
    return (
        <>
        <Header/>
        <main>
            <section className="text-center py-10">
                <h1 className="text-3xl font-bold text-white">Our Products</h1>

                <p className="mt-2 ext-gray-600">
                    Explore our collection of Products.
                </p>
            </section>

            <ProductFilter/>

            <div className="max-w-6xl mx-auto px-6 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Products.map((product) => (
                        <ProductCard key={product.id}
                        name={product.name} 
                        price={product.price}/>
                    ))}
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};