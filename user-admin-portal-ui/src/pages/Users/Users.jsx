import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";
import UserTable from "../../components/UserTable/UserTable";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Users Page</h1>

      <UserTable users={users} />
    </>
  );
}

export default Users;