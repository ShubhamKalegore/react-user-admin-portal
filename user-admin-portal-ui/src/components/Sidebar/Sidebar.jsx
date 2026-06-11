import './Sidebar.css'
import { Link } from "react-router-dom";



function Sidebar() {
  return (
    <aside className="sidebar">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/users">Users</Link>
    <Link to="/profile">Profile</Link>
    </aside>
  );
}

export default Sidebar;