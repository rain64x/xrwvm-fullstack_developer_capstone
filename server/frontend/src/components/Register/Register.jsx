import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const goHome = () => {
    window.location.href = window.location.origin;
  };

  const register = async (e) => {
    e.preventDefault();

    let register_url = `${window.location.origin}/djangoapp/register`;
    
    try {
      const res = await fetch(register_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await res.json();
      if (json.status) {
        sessionStorage.setItem('username', json.userName);
        window.location.href = window.location.origin;
      } else if (json.error === "Already Registered") {
        alert("A user with this username is already registered");
        window.location.href = window.location.origin;
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="register_container">
      <div className="header">
        <span className="text">SignUp</span>
        <button onClick={goHome} className="close-btn">×</button>
      </div>
      <form onSubmit={register}>
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              className="input_field"
              value={formData.userName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="input_field"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="input_field"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input_field"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input_field"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="submit_panel">
          <input className="submit" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
