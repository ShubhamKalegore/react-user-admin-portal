import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../services/userService";

const Profile = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
          if (error.response?.status === 403) {
            alert("You are not authorized to view this user.");
          }
      });
  }, [id]);

  return (
    <div>
      <h1>Profile Page</h1>

      {user && (
        <>
          <p>Id: {user.id}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </>
      )}
    </div>
  );
};

export default Profile;