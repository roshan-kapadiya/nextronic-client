import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert("Login successful");
      localStorage.setItem("id", data.id);
      navigate("/Product");
    } else {
      alert("invalid emailid or password");
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      // If user is already logged in, redirect to /products
      navigate("/Product");
    }
  });
  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">Log In into your Account</h1>
        <form className="w-50 mx-auto border border-warning p-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" required>
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label" required>
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Sign In
          </button>
          <p className="text-center my-3">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
