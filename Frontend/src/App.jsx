import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import AIChat from "./components/AIChat";
import Hero from "./components/Hero";
import Muanim from "./components/muanim";
import LoginSignup from "./components/loginSign"; // Import the new login/signup component
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className={`bg-gray-100 min-h-screen text-gray-900 ${showLogin ? "overflow-hidden" : ""}`}>
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold text-blue-600">MyShop</div>
          <ul className="flex space-x-6 text-lg font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Products</li>
            <li
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => setShowLogin(true)}
            >
              Login / Signup
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 bg-blue-50">
        <h1 className="text-5xl font-extrabold mb-4 text-blue-700">
          Revolutionize Your Shopping Experience
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Introducing your AI Shopping Assistant: smarter, faster, and personalized.
        </p>
      </header>

      {/* Features Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">What Can Our AI Assistant Do?</h2>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Find products matching your specific requirements</li>
            <li>✔ Compare prices across multiple platforms</li>
            <li>✔ Suggest trending items based on your preferences</li>
            <li>✔ Save your shopping history for future recommendations</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Discover Competitors</h2>
          <p className="text-gray-700 mb-4">
            See how similar platforms are evolving and find better deals:
          </p>
          <div className="space-y-2">
            <p>Inspired by: <span className="text-blue-600">amazon.com</span></p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-200 px-3 py-1 rounded-full">ebay.com</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">walmart.com</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">target.com</span>
              <span className="bg-gray-200 px-3 py-1 rounded-full">bestbuy.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="container mx-auto py-16 px-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Search for Your Perfect Product</h2>
          <p className="text-gray-700 mb-4">
            Let our AI Shopping Assistant help you find exactly what you need:
          </p>
          <SearchBar setSearchQuery={setSearchQuery} />
        </div>
      </div>

      {/* Animation Component */}
      <div>
        <Muanim />
      </div>

      {/* Login/Signup Modal */}
      {showLogin && <LoginSignup onClose={() => setShowLogin(false)} />}

      {/* Footer */}
      <footer className="bg-white shadow-md py-4 mt-10">
        <div className="text-center text-gray-600">
          &copy; 2025 MyShop. Powered by AI Shopping Assistant.
        </div>
      </footer>
    </div>
  );
}

export default App;
