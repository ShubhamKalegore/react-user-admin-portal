import React from 'react'
import './UserTable.css'
import { useNavigate } from "react-router-dom";
import { deleteUser } from '../../services/userService';
import { updateUser } from '../../services/userService';

const UserTable = ({users, onUserDeleted, onUserUpdated}) => {
    const navigate = useNavigate();

    const viewProfile = (user) => {
      navigate(`/profile/${user.id}`);
    };

    const deleteCurrentUser = (user) => {
      deleteUser(user)
        .then((response) => {
          alert("User Deleted Sucessfully");
          onUserDeleted();
        })
        .catch((error) => {
          console.error(error);
        });
    }

        // const updateCurrentUser = (user) => {
        //   updateUser(user)
        //     .then((response) => {
        //       alert("User Updated Sucessfully");
        //       onUserUpdated();
        //     })
        //     .catch((error) => {
        //       console.error(error);
        //     });
        // };

      const updateCurrentUser = (user) => {
        navigate("/users/edit", {
          state: { user }
        });
      };

  return (
    <>
    <table className="user-table">
      <thead>
        <tr>
          {/* <th>Id</th> */}
          <th>Email</th>
          <th>View</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            {/* <td>{user.id}</td> */}
            <td>{user.email}</td>
            <td className='buttons'>
              <button onClick={() => viewProfile(user)}>View Details</button>
              <button onClick={() => deleteCurrentUser(user)}>Delete</button>
              <button onClick={() => {updateCurrentUser(user)}}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default UserTable
