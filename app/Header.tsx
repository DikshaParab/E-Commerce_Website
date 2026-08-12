const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-10">
      <h1 className="text-2xl font-bold text-[763d31]">Horizon</h1>
      <nav className="flex gap-6 text-brown-600 font-medium">
        <span className="cursor-pointer hover:text-gray-900">Home</span>
        <span className="cursor-pointer hover:text-gray-900">Products</span>
        <span className="cursor-pointer hover:text-gray-900">About</span>
        <span className="cursor-pointer hover:text-gray-900">Cart</span>
      </nav>
    </header>
  );
};

export default Header;