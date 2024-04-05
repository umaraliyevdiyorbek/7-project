import { NavLink } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidenav">
      <ul>
        <li>
          <NavLink to="/authors">Authors</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/genres">Genres</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
