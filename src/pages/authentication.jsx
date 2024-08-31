import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isLogin) {
        await dispatch(loginUser({ email, password })).unwrap();
        navigate("/");
      } else {
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">
        {isLogin ? "Login" : "Register"}
      </h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 mr-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          disabled={loading}
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Register"}
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mr-3 text-blue-500 hover:underline"
        >
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </button>
      </div>
    </div>
  );
};

export default Authentication;
