import React, { useEffect, useState } from "react";

import Navbar from "../Component/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/getProducts");
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSearch = async (e) => {
    const query = e.target.value; // current input value
    try {
      const response = await fetch(
        `http://localhost:4000/searchProducts?query=${query}`
      );
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row mb-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(e);
            }}
          >
            <input
              type="search"
              placeholder="Search for products..."
              onChange={(e) => handleSearch(e)}
              className="form-control border-0 border-bottom bg-light border-dark w-50"
            />
          </form>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} md={4} className="col-md-4 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="position-relative">
                  <Link className="border-0 p-0" to={`/prodDetail/${product._id}`}>
                    <img
                      className="card-img-top"
                      src={`http://localhost:5000/uploads/${product.pimg} `}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="card-body">
                  <h5 className="card-title fs-3 text-capitalize">{product.pname}</h5>
                  <p className="card-text">
                    <span className="text-warning fw-bold fs-5">
                      &#8377; {product.price}
                    </span> <br />
                    <Link to={`/prodDetail/${product._id}`} className="btn btn-outline-warning fs-6 mt-2">Get More Info</Link>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductPage;
