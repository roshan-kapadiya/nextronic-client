import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer mt-5 bg-dark text-white">
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                {/* About Nextronic */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">NEXTRONIC</h6>
                  <p>
                    Nextronic is a modern online electronics store offering a wide range of gadgets, smart devices, and home electronics with a simple and convenient shopping experience.
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                {/* Products */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <Link className="text-white text-decoration-none" to={"/products/smart-devices"}>Smart Devices</Link>
                  </p>
                  <p>
                    <Link className="text-white text-decoration-none" to={"/products/kitchen"}>Kitchen</Link>
                  </p>
                  <p>
                    <Link className="text-white text-decoration-none" to={"/products/home-appliances"}>Smart Home Devices</Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                {/* Useful links */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                  <p>
                    <Link className="text-white text-decoration-none" to={"/profile"}>
                      Your Account
                    </Link>
                  </p>

                  <p>
                    <Link className="text-white text-decoration-none">Categories</Link>
                  </p>
                  <p>
                    <Link className="text-white text-decoration-none">Orders</Link>
                  </p>
                  <p>
                    <Link className="text-white text-decoration-none" to={"/contact"}>Contact Us</Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                {/* Contact */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  {/* <p>
                    <i className="fas fa-home mr-3"></i> 123 Tech Street, New York, NY
                  </p> */}
                  <p>
                    <i className="fas fa-envelope mr-3"></i> support@nextronic.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> +1 234 567 890
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> +1 234 567 891
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            {/* Copyright */}
            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-7 col-lg-8 text-center text-md-start w-100">
                  <div className="p-3 text-center">
                    © 2025, All Rights Reserved
                  </div>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
