import React from 'react'
import './UserTable.css'
import { useNavigate } from "react-router-dom";
const UserTable = ({users}) => {
    const navigate = useNavigate();

    const viewProfile = (user) => {
      navigate(`/profile/${user.id}`);
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
            <td><button onClick={() => viewProfile(user)}>View Details</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default UserTable
