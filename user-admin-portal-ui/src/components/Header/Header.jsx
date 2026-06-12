import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProfileDialog from '../ProfileDialog/ProfileDialog';


const Header = () => {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const handleLogut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate('/login');
  }
  return (
    <>
      <header className="header">
        <h2>User Admin Portal</h2>

          <div className="header-actions">
    <button className="logout-btn" onClick={handleLogut}>
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
