import React from 'react'
import Navbar from '../Component/Navbar'
import { Link } from "react-router-dom";
import contactbg from "../assets/contactbg.webp";
import Footer from '../Component/Footer';

const locations = [
  {
    country: "London",
    address: "425 Broadway, 20th floor pharchard view, London",
    phone: "+91 123 456 7890",
    email: "support@store.com",
    flag: "https://atleto-demo1.myshopify.com/cdn/shop/files/London_cf52e309-3541-4178-8d87-ca4432d2693b.jpg?v=1749192812",
  },
  {
    country: "France",
    address: "27 Eden walk eden centre orchard view, Paris, France",
    phone: "+91 123 456 7890",
    email: "support@store.com",
    flag: "https://atleto-demo1.myshopify.com/cdn/shop/files/France_b4257e2c-fc8b-47be-a42c-297cf2009cd0.jpg?v=1749192812",
  },
  {
    country: "Canada",
    address: "523 North stockport road bridge, Toronto, Canada",
    phone: "+91 123 456 7890",
    email: "support@store.com",
    flag: "https://atleto-demo1.myshopify.com/cdn/shop/files/Canada_c157d3e1-4923-4e51-9a13-f8827c097e18.jpg?v=1749192812",
  },
  {
    country: "England",
    address: "048 Holburn street 20th floor camberley, England",
    phone: "+91 123 456 7890",
    email: "support@store.com",
    flag: "https://atleto-demo1.myshopify.com/cdn/shop/files/England_037d3fea-f508-4938-8dcf-e0eef2625ddf.jpg?v=1749192812",
  },
];
const Contact = () => {
  return (

    <>
      <Navbar />
      <h1 className='text-center'>Contact Us</h1>
      <section className="py-5 text-center text-white d-flex align-items-center"
        style={{

          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          backgroundColor: "#faebe3"
        }}
      >
        <div className="container">
          <div className="text-center ">
            <h2 className="fw-bold">Get in Touch</h2>
            <p className="text-muted">Find us across the globe</p>
          </div>

          <div className="row g-4">
            {locations.map((loc, index) => (
              <div className="col-12 col-md-6 col-lg-3" key={index}>
                <div className="card text-center shadow-sm border-0 p-3 h-100">
                  <img
                    src={loc.flag}
                    alt={loc.country}
                    className="mx-auto mb-3 rounded"
                    width="72"
                    height="44"
                  />
                  <p className="mb-2">{loc.address}</p>
                  <div><br />
                    <a href={`tel:${loc.phone}`} className="d-block text-decoration-none text-primary">
                      {loc.phone}
                    </a><br />
                    <a href={`mailto:${loc.email}`} className="d-block text-decoration-none text-secondary">
                      {loc.email}
                    </a>
                  </div>
                  <h6 className="fw-bold mt-3">{loc.country}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-5 bg-light" id="contact">

        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Keep in Touch with Us</h2>
            <p className="text-muted">
              Have questions? Fill out the form below and we’ll get back to you.
            </p>
          </div>

          <form>
            <div className="row g-3">
              {/* Full Name */}
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  Your Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Your Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone */}
              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Your Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Message */}
              <div className="col-md-6">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms"
                    required
                  />
                  <label className="form-check-label" htmlFor="terms">
                    I accept the terms & conditions and agree with the privacy
                    policy.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer></Footer>
      {/* <div class="container-fluid footer mt-5">
        <footer
          class="text-center text-lg-start text-white"
          
        >
          <div class="container p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                     ATLET
                  </h6>
                  <p>
                    Atlet is a modern and user-friendly online eBook store that provides readers with instant access to a wide collection of digital books across multiple genres.
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <Link className="text-decoration-none">Children's books</Link>
                  </p>
                  <p>
                    <Link class="text-white text-decoration-none">Romance novel books</Link>
                  </p>
                  <p>
                    <Link class="text-white text-decoration-none">Thriller books</Link>
                  </p>
                  <p>
                    <Link class="text-white text-decoration-none">Drama books</Link>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">
                    Useful links
                  </h6>
                  <p>
                    <Link
                     class="text-white text-decoration-none">Your Account</Link>
                  </p>
                  <p>
                    <Link class="text-white text-decoration-none">Category</Link>
                  </p>
                  <p>
                    <Link class="text-white text-decoration-none">Your Orders</Link>
                  </p>
                  <p>
                    <Link class="text-white text-decoration-none" to={"/contact"}>Contact Us</Link>
                  </p>
                </div>

                <hr class="w-100 clearfix d-md-none" />

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p>
                    <i class="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p>
                    <i class="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p>
                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i class="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </section>

            <hr class="my-3" />

            <section class="p-3 pt-0">
              <div class="row d-flex align-items-center">
                <div class="col-md-7 col-lg-8 text-center text-md-start w-100">
                  <div class="p-3 text-center ">
                    
                      © 2025, Copy all rights reserved
                    
                  </div>
                </div>

                <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  ></a>

                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>

                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  >
                    <i class="fab fa-google"></i>
                  </a>

                  <a
                    class="btn btn-outline-light btn-floating m-1"
                    className="text-white"
                    role="button"
                  >
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div> */}
    </>
  )
}

export default Contact
