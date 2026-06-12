import React, { useEffect, useState } from "react";
import "./ProfileDialog.css";
import { getUserById } from "../../services/userService";

const ProfileDialog = ({ isOpen, onClose }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const userId = localStorage.getItem("userId");

      getUserById(userId)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.log(error);
           if (error.response?.status === 403) {
            alert("You are not authorized to view this user.");
           }
        });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>User Profile</h3>

        {user ? (
          <>
            <p>Email: {user.email}</p>
            <p>Name: {user.name}</p>
            <p>Id: {user.id}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProfileDialog;