import React from "react";
import Layout from "../Components/Layout";
import venus from "../media/venus.jpg";

export default function Friday({ content }) {
  return (
    <Layout
      content={{
        dayOfWeek: "Friday",
        dayDescription:
          'For Fridays: the "Contemplating Buddha" (Paang Rum Peung) stands with hands resting across the chest, the right hand covering the left. The pose implies a complete spiritual transformation. A benevolent tranquility expresses the equanimity obtained through Vipassana meditation. The meditative practice develops clear seeing by training the faculties through direct experience.',
        image: venus,
        link: "",
        styles: { color: "blue" },
      }}
    />
  );
}
