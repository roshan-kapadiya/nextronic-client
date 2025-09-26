import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

import bgVideo from "../../../images/v1.mp4";
import banner1Img from "../../../images/banner1.jpg";
import book1 from "../../../images/about.jpeg";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/getProducts");
  //     if (response.ok) {
  //       const data = await response.json();
  //       setProducts(data);
  //     } else {
  //       console.error("Failed to fetch products");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section position-relative text-center text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-100"
          style={{ height: "80vh", objectFit: "cover" }}
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="hero-text position-absolute top-50 start-50 translate-middle"
          style={{ zIndex: 2 }}
        >
          <h2>Welcome to Nextronic!</h2>
          <p>Discover the best electronics for your home and life.</p>
        </div>
      </section>

      {/* Banner 1 */}
      <section className="banner1 d-flex align-items-center justify-content-between mt-5 p-5">
        <div className="banner1-text">
          <h4>NEW ARRIVALS ONLY</h4>
          <h1>new 👋 <br />collection<br />for everyone</h1>
          <Link to="/smart-devices" className="btn btn-primary mt-3">Latest Collection</Link>
        </div>
        <div className="banner1-img">
          <img src={banner1Img} alt="Cooking Appliances" className="img-fluid rounded shadow" />
        </div>
      </section>

      {/* Banner 2 */}
      <section className="banner2 text-center py-5 bg-light">
        <h2>Exclusive</h2>
        <h2>ONLY BEST SELLERS PRODUCTS</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <Link to="/kitchen" className="btn btn-secondary mt-3">Check Now</Link>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe text-center py-5">
        <h2>Get Exclusive Offers On Email</h2>
        <p>Subscribe to Our newsletter and stay updated</p>
        <form className="subscribe-form d-flex justify-content-center mt-3">
          <input
            type="email"
            placeholder="Enter Your Email id"
            className="form-control w-50 me-2"
            required
          />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>

      {/* Products Section */}
      {/* <div className="container mt-5">
        <h2 className="text-center text-uppercase">Pick your favourite Products</h2>
        <div className="row mt-4">
          {products.map((product) => (
            <div className="col-md-4" key={product._id}>
              <div className="card p-3 border-0 shadow-lg mt-4">
                <img
                  src={`http://localhost:5000/uploads/${product.pimg}`}
                  alt={product.pname}
                  className="img-fluid"
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.pname}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* About Section */}
      <section className="about container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="text-decoration-underline">About Website</h1>
            <p className="fs-5 mt-4">
              Welcome to Nextronic Store, the perfect place to find all your electronic needs.
              We have a wide range of products like mobiles, laptops, accessories, home appliances,
              and smart gadgets that make life easier. Our aim is to give you good quality products
              at the best price with quick delivery and safe payments. At Nextronic, we want to make
              technology simple and useful for everyone. Whether you need a new device for work,
              study, or daily use, Nextronic Store is here to help you stay updated and connected.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={book1}
              alt="About Interior Store"
              className="img-fluid rounded shadow"
              style={{ width: "400px", height: "300px" }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
