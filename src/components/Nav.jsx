import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Ajouter Techno
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "activeLink" : undefined)}
          >
            Toutes les Technos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
