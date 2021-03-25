import React from "react";
import Nav from "./Nav";
import Footer from "../Components/Footer";
import DayOfWeek from "./DayOfWeek";
import Home from "./Home";
import Header from "./Header";

const Layout = ({ content }) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const url = typeof window !== "undefined" ? window.location.href : null;
  const activeDay = url ? url.split("/")[3] : null;

  return (
    <div className={`background-class ${activeDay}`}>
      <Header />
      <Nav daysOfWeek={daysOfWeek} />
      {content && <DayOfWeek content={content} />}
      {activeDay === null && <Home />}
      <Footer daysOfWeek={daysOfWeek} activeDay={activeDay} />
    </div>
  );
};

export default Layout;
