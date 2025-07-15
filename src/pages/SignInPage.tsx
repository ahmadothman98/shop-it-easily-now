// SignIn.jsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const adminEmails = ["team@wearlumine.com"]; // list of admin emails

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (!adminEmails.includes(email)) return;

    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (adminEmails.includes(user.email)) {
        navigate("/my-orders");
      } else {
        setError("Access denied: You are not an admin.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Admin Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full p-2 border rounded mb-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
