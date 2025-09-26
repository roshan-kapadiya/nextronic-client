import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = React.useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleChangeImg = (e) => {
    setFormData({ ...formData, profile: e.target.files[0] });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("gender", formData.gender);
    formDataToSend.append("city", formData.city);
    formDataToSend.append("profile", formData.profile);
    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        alert("User registered successfully");
        navigate("/login");
      } else {
        alert("Failed to register user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred");
    } finally {
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        city: "",
        profile: null,
      });
      document.getElementById("profile").value = "";
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">Create Account</h1>
        <form className="w-50 mx-auto border border-warning p-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" required>
              Name
            </label>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="name"
              className="form-control"
              id="name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" required>
              Email address
            </label>
            <input
              type="email"
              onChange={(e) => handleChange(e)}
              name="email"
              className="form-control"
              id="email"
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
              onChange={(e) => handleChange(e)}
              className="form-control"
              id="password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label" required>
              Select Gender:
            </label>{" "}
            &nbsp;&nbsp;&nbsp;
            <input
              type="radio"
              className="form-check-input"
              id="male"
              onChange={(e) => handleChange(e)}
              name="gender"
              value="male"
            />
            &nbsp;&nbsp; Male &nbsp;&nbsp;
            <input
              type="radio"
              className="form-check-input"
              id="female"
              onChange={(e) => handleChange(e)}
              name="gender"
              value="female"
            />
            &nbsp;&nbsp; Female
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label" required>
              Select City
            </label>
            <select
              name="city"
              className="form-select"
              id="city"
              required
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select City</option>
              <optgroup label="Gujarat">
                <option value="Surat">Surat</option>
                <option value="Vapi">Vapi</option>
                <option value="Baroda">Baroda</option>
                <option value="Bharuch">Bharuch</option>
              </optgroup>
              <optgroup label="Maharashtra">
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Nagpur">Nagpur</option>
              </optgroup>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="profile" className="form-label" required>
              Profile
            </label>
            <input
              type="file"
              name="profile"
              onChange={(e) => handleChangeImg(e)}
              className="form-control"
              id="profile"
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Sign Up
          </button>
          <p className="text-center my-3">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
