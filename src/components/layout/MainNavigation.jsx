import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={({ isActive }) => (isActive ? classes.active : null)}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
