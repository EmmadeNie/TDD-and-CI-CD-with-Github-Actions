import { Link } from "gatsby";
import React from "react";

const Nav = ({ daysOfWeek }) => {
  return (
    <>
      <div className={"layout-content-container homepage"}>
        <Link to={"/"}>
          <h2>HOMEPAGE</h2>
        </Link>
      </div>
      <ul className={"layout-content-container nav-links"}>
        {daysOfWeek.map((dayOfWeek) => {
          return (
            <li>
              <Link to={`/${dayOfWeek}/`}>{dayOfWeek}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Nav;
