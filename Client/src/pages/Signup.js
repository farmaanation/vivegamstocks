import React from "react";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password, role);
  };

  return (
    <form
      className="signup, w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg"
      action=""
      onSubmit={handleSubmit}
    >
      <h3 className="font-bold leading-tight text-2xl mt-0 mb-2 bg-gradient-to-r from-blue-600 via-violet-600 to-sky-400 bg-clip-text text-transparent">
        Generate Credentials
      </h3>

      <label className="text-gray-700 font-bold py-2">Email : </label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
        placeholder="Enter your email"
      />

      <label className="text-gray-700 font-bold py-2">Password : </label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        className="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
        placeholder="********"
      />

      <label className="text-gray-700 font-bold py-2">Privilege : </label>
      <input
        type="role"
        onChange={(e) => setRole(e.target.value)}
        value={role}
        className="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
        placeholder="ENTER : user/admin"
      />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4"
        disabled={isLoading}
      >
        Sign up
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
