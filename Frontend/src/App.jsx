import React from 'react';
import SearchBar from './components/SearchBar';
import AIChat from './components/AIChat';
import './App.css';
import Hero from './components/Hero';
import Muanim from './components/muanim';
// import GeometricAnimation from './components/GeometricAnimation';

function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState([]);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">MyShop</div>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Products</li>
            <li className="hover:underline cursor-pointer">Login / Signup</li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <header className="text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Revolutionize Your Shopping Experience</h1>
        <p className="text-xl text-gray-300 mb-8">
          Introducing your AI Shopping Assistant: smarter, faster, and personalized. Discover the best products tailored to your needs and preferences.
        </p>
      </header>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What Can Our AI Assistant Do?</h2>
          <ul className="text-gray-400 space-y-2">
            <li>✔ Find products matching your specific requirements</li>
            <li>✔ Compare prices across multiple platforms</li>
            <li>✔ Suggest trending items based on your preferences</li>
            <li>✔ Save your shopping history for future recommendations</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Discover Competitors</h2>
          <p className="text-gray-400 mb-4">
            See how similar platforms are evolving and find better deals:
          </p>
          <div className="space-y-2">
            <p>Inspired by: <span className="text-blue-400">amazon.com</span></p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-700 px-3 py-1 rounded-full">ebay.com</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">walmart.com</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">target.com</span>
              <span className="bg-gray-700 px-3 py-1 rounded-full">bestbuy.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Search for Your Perfect Product</h2>
          <p className="text-gray-400 mb-4">
            Let our AI Shopping Assistant help you find exactly what you need:
          </p>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
      </div>

      {/* Footer */}
     <div>

     <Muanim/>
     </div>
      {/* <GeometricAnimation/> */}
      <footer className="bg-gray-800 py-4">
        <div className="text-center text-gray-400">&copy; 2025 MyShop. Powered by AI Shopping Assistant.</div>
      </footer>
    </div>
  );
}

export default App;
