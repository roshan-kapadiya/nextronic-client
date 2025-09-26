import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const HomeApp = () => {
  const [products, setProducts] = useState([]);
  const category = "home-appliances";

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/getProducts?category=${category}`
      );
      if (response.ok) {
        const result = await response.json();
        setProducts(result);
      } else {
        console.error("Failed to fetch products");
      }
    } catch (error) {
      console.error(`Error fetching ${category}:`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // category is constant

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">
          {category.replace("-", " ").toUpperCase()}
        </h2>
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-md-4 mb-4" key={product._id}>
                <div className="card h-100 text-center shadow-sm">
                  <div className="position-relative">
                    <Link to={`/prodDetail/${product._id}`} className="border-0 p-0">
                      <img
                        src={`http://localhost:5000/uploads/${product.pimg}`}
                        className="card-img-top"
                        alt={product.pname}
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                    </Link>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fs-4 text-capitalize">{product.pname}</h5>
                    <p className="fw-bold text-warning fs-5">₹{product.price}</p>
                    <Link
                      to={`/prodDetail/${product._id}`}
                      className="btn btn-outline-warning mt-2"
                    >
                      Get More Info
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">
              No {category.replace("-", " ")} available.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeApp;
