import { Link } from "gatsby";
import React from "react";

const Footer = ({ activeDay, daysOfWeek }) => {
  const indexActiveDay = activeDay ? daysOfWeek.indexOf(activeDay) : null;
  const prevLink = daysOfWeek[indexActiveDay - 1];
  const nextLink = daysOfWeek[indexActiveDay + 1];

  return (
    <footer className={"layout-content-container footer"}>
      <Link to={`/${prevLink}/`}>Prev day</Link>
      <Link to={`/${nextLink}/`}>Next day</Link>
    </footer>
  );
};

export default Footer;
