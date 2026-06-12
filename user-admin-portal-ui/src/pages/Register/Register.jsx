import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { register } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleRegister = () => {
    register(user)
      .then((response) => {
        if (response.data === "Success") {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="login-container">
        <h1>Registration Page</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        />
        <button onClick={handleRegister}>Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
