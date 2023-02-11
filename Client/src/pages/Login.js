import React from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="flex bg-gray-bg1 m-2 md:m-10 mt-24 p-2 md:p-8 bg-gradient-to-r from-slate-500 to-slate-800 rounded-lg Border">
      <div className="w-full max-w-md m-auto bg-gray-800 rounded-lg Border shadow-default py-10 px-16">
        {/* <h1 className="text-2xl bg-gradient-to-r from-blue-500 via-violet-400 to-sky-400 font-medium mt-4 mb-12 text-center"> */}
        <h1 className="text-3xl text-center font-bold">🔐</h1>
        <h1 className="text-2xl bg-gradient-to-r from-cyan-600 via-violet-400 to-sky-800 bg-clip-text text-transparent text-center font-medium mt-4 mb-12">
          Secure Login
        </h1>
        <form className="login " onSubmit={handleSubmit}>
          <div>
            <label className="bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              value={email}
            />
          </div>
          <div>
            <label className="bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text text-transparent">
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              value={password}
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <button
              className={`bg-green py-2 px-4 text-sm text-indigo-200 rounded border border-violet-500 focus:outline-none focus:border-green-dark`}
              disabled={isLoading}
            >
              Log in
            </button>
          </div>
          <div className="text-2xl bg-gradient-to-r from-cyan-600 via-violet-400 to-sky-800 bg-clip-text text-transparent text-center font-bold mt-7 mb-7">
            Vivegam Stocks
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
