import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const activeLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <nav className={css.nav}>
      <NavLink to="/">
        <img src="../../../images/Logo.svg" />
      </NavLink>
      <ul className={css.navMenu}>
        <li className={css.link}>
          <NavLink className={activeLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.link}>
          <NavLink className={activeLink} to="/catalog">
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
