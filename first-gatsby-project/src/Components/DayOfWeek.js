import React from "react";

const DayOfWeek = ({ content }) => {
  return (
    <div className={"layout-content-container day-of-week"}>
      <div className={"day--title"}>
        <h1>{content.dayOfWeek}</h1>
      </div>
      <div className={"day--content"}>
        <img
          className={"day--image"}
          src={content.image}
          height={"200"}
          width={"200"}
        />
        <p>{content.dayDescription}</p>
      </div>
    </div>
  );
};

export default DayOfWeek;
