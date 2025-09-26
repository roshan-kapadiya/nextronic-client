import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const ProdDetails = () => {
  const [data, setData] = useState({});
  const [inCart, setInCart] = useState(false);
  const { id } = useParams();
  const uid = localStorage.getItem("id");
  const fetchData = async () => {
    const response = await fetch(`http://localhost:4000/prodDetails/${id}`);
    const result = await response.json();
    setData(result);
    console.log(data);
  };
  const checkCart = async () => { 
    if (!uid) return;
    const response = await fetch(
      `http://localhost:4000/checkCart/${uid}/${id}`
    );
    const result = await response.json();
    setInCart(result.inCart);
  };
  const handleSubmit = async () => {
    const response = await fetch("http://localhost:4000/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pid: id, uid }),
    });
    const result = await response.json();
    console.log(result);
    alert("Product added to cart");
    setInCart(true);
  };
  useEffect(() => {
    fetchData();
    checkCart();
  });
  return (
    <>
      <Navbar></Navbar>
      {/* <h1>Product Details</h1> */}
      {/* <div>
        <h2>{data.pname}</h2>
        <img
          src={`http://localhost:5000/uploads/${data.pimg}`}
          alt={data.pname}
        />
        <p>Price: &#8377; {data.price}</p>
        <p>Description: {data.description}</p>
      </div> */}
      <div className="container-fluid">
        <hr />
      </div>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className="fs-5" to="/">
                Home
              </Link>
            </li>
            <li className="breadcrumb-item active fs-5" aria-current="page">
              Product Details
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`http://localhost:5000/uploads/${data.pimg}`}
              alt={data.pname}
              height={"550px"}
              width={"550px"}
            />
          </div>
          <div className="col-md-6">
            <h2 className="text-capitalize">Product Name: {data.pname}</h2>
            <hr />
            <div className="card w-50 p-4">
              <p className="fs-2 text-warning">Price: &#8377; {data.price}</p>
              <p className="fs-4 text-warning">
                Description: {data.description}
              </p>
            </div>
            {uid === null ? (
              <Link
                to="/login"
                className="btn btn-warning text-white btn-lg mt-4"
              >
                Login to Add to Cart
              </Link>
            ) : inCart ? (
              <p className="text-success mt-4 fs-3">
                This product is already in your cart.
              </p>
            ) : (
              <button
                className="btn btn-warning text-white btn-lg mt-4"
                onClick={handleSubmit}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProdDetails;
