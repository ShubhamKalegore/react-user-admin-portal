import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileDialog from '../ProfileDialog/ProfileDialog';
import api from "../../services/api";


const Header = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");

      localStorage.removeItem("userId");

      navigate("/login");
    }
    catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <header className="header">
        <h2>User Admin Portal</h2>

          <div className="header-actions">
    <button className="logout-btn" onClick={handleLogout}>
      Logout
    </button>

    <button
      className="profile-btn"
      onClick={() => setShowProfile(true)}
    >
      👤
    </button>
  </div>
      <ProfileDialog
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />

      </header>
    </>
  );
}

export default Header
