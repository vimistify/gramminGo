import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

function LoginPage() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate(); 
  const handleSubmit = (e) => { 
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-[90vh] md:min-h-screen bg-gray-100">
      <div className="bg-[#D2B48C] rounded-lg shadow-lg overflow-hidden w-full max-w-[900px] h-auto md:h-[500px] flex flex-col md:flex-row mx-4 md:mx-0">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://media.istockphoto.com/id/1363631896/vector/black-haired-white-boy-wave-hello-cartoon-character-design-little-kid-waving-bye-hand.jpg?s=612x612&w=0&k=20&c=Wo6RjGwM2OEMmceMABInXqyfWPJQqi--qEVWtvN1xc0="
            alt="Coffee"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-white">
          <h2 className="text-3xl font-bold text-[#4E342E] text-center mb-6">
            Welcome Back
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4E342E] text-white py-2 px-4 rounded-lg hover:bg-[#3E2723] transition duration-300"
            >
              Log In
            </button>
          </form>
          <p className="text-sm text-gray-600 text-center mt-6">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-[#6D4C41] font-medium hover:underline"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;