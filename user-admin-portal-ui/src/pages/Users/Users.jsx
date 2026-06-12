import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";
import UserTable from "../../components/UserTable/UserTable";

function Users() {
  const [users, setUsers] = useState([]);

   const loadUsers = () => {
     getUsers()
       .then((response) => {
         setUsers(response.data);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   useEffect(() => {
     loadUsers();
   }, []);

  return (
    <>
      <h1>Users Page</h1>

      <UserTable users={users} onUserDeleted={loadUsers} onUserUpdated={loadUsers}/>
    </>
  );
}

export default Users;