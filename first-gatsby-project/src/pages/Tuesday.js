import React from "react";
import Layout from "../Components/Layout";
import mars from "../media/mars.jpg";

export default function Tuesday() {
  return (
    <Layout
      content={{
        dayOfWeek: "Tuesday",
        dayDescription:
          'For Tuesdays: "Realizing Nirvana" (Paang Saiyasna), the image, reclining on the right side, toes even, indicates his death. Religious texts state that the Buddha entered parinibbana on this day of the week. His final words to his disciples were, "As a flame blown out by the wind goes to rest and cannot be defined so the wise man freed from individuality goes to rest and cannot be defined. Gone beyond all images gone beyond the power of words", Sutta Nipata.',
        image: mars,
        link: "",
        styles: { color: "pink" },
      }}
    />
  );
}
