import React, { useState } from "react";

const LoginSignup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isLogin
      ? "http://127.0.0.1:8000/auth/login/"
      : "http://127.0.0.1:8000/auth/register/";
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,  // Now sending 'email' instead of 'username'
          password: password,
        }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setMessage(isLogin ? "Login successful!" : "Signup successful!");
        setTimeout(() => {
          setMessage("");
          onClose();
        }, 1500);
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
        <h2 className="text-2xl font-semibold mb-4 text-center">{isLogin ? "Login" : "Sign Up"}</h2>
        {message && <p className="text-red-500 text-sm mb-2 text-center">{message}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded bg-gray-100"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded bg-gray-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-gray-500 mt-3">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span className="text-blue-500 cursor-pointer ml-1" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center bg-white border py-2 rounded text-gray-700 hover:bg-gray-100">
          <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" className="mr-2" />
          Log in with Google
        </button>

        <button onClick={onClose} className="w-full mt-3 bg-red-500 text-white py-2 rounded hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
