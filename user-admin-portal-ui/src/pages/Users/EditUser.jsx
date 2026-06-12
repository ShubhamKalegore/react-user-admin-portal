import { useLocation } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../../services/userService";

const EditUser = () => {
  const location = useLocation();

  const [user, setUser] = useState(location.state.user);

  const handleUpdate = () => {
    updateUser(user)
      .then(() => {
        alert("User Updated Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <h1>Edit User</h1>

      <input
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
      />

      <button onClick={handleUpdate}>
        Save
      </button>
    </>
  );
};

export default EditUser;