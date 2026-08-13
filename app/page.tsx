import Header from "./Header";
import Footer from "./Footer";
import HomeButton from "./components/HomeButtons";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/ProductCard";
import ProductFilter from "./components/ProductFilter";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-bold text-teal-800">
            Welcome to Horizon
          </h1>

          <p className="mt-4 text-lg text-teal-600">
            Welcome to my e-commerce website. Discover products you'll love.
          </p>

          <HomeButton />
        </section>
      </main>
      <Footer />
    </>
  );
}