import HomeButton from "./components/HomeButtons";

export default function Home() {
  return (
    <>
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
    </>
  );
}