import React, { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Profile = () => {
  const [userName, setUserName] = useState(localStorage.getItem("name") || "Guest");
  const [userEmail, setUserEmail] = useState(localStorage.getItem("email") || "Not available");

  useEffect(() => {
    const handleStorageChange = () => {
      setUserName(localStorage.getItem("name") || "Guest");
      setUserEmail(localStorage.getItem("email") || "Not available");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center mb-4">Your Account</h2>
        <div className="card p-4 shadow-sm">
          <h4>Profile Details</h4>
          <p><strong>Name:</strong> {userName}</p>
          <p><strong>Email:</strong> {userEmail}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
