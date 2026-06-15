import React, { useState } from 'react'
import './Login.css';
import { Link } from "react-router-dom";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleLogin = () => {
    console.log(user);

    login(user)
      .then((response) => {
        if (response.data !== "Invalid credentials.") {
          // Local storge 
          // localStorage.setItem("accessToken", response.data.accessToken);
          // localStorage.setItem("refreshToken", response.data.refreshToken);
          localStorage.setItem("userId", response.data.userId);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="login-container">
        <h1>Login Page</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value,
            })
          }
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/register">Create User</Link>
        </p>
      </div>
    </>
  );
}

export default Login
