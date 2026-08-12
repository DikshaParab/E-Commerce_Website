import Header from "./Header";
import Footer from "./Footer";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/ProductCard";
import ProductFilter from "./components/ProductFilter";

const Products = [
  {id:1, name: "Wireless Mouse", price:799, category: "Electronics"},
  {id:2, name: "Rose-gold Bracelet", price: 4999, category:"Jewellery"},
  {id:3, name: "Wireless Keyboard", price: 1299, category: "Electronics"},
  {id:4, name: "Summer Dress", price: 1499, category: "Clothes"},
  {id:5, name: "USB-C Hub", price: 999, category: "Electronics"},
  {id:6, name: "Gold Necklace", price: 75000, category: "Jewellery"},
  {id:7, name: "White Skirt", price: 899, category: "Clothes"},
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductFilter/>
        <Wrapper>
          {Products.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price}/>
          ))}
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}