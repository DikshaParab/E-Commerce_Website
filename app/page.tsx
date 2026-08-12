import Header from "./Header";
import Footer from "./Footer";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/ProductCard";

const Products = [
  {id:1, name: "Wireless Mouse", price:799},
  {id:2, name: "Wireless Keyboard", price: 1299},
  {id:3, name: "USB-C Hub", price: 999},
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
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