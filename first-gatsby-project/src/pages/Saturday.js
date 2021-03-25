import React from "react";
import Layout from "../Components/Layout";
import saturn from "../media/saturn.jpg";

export default function Saturday() {
  return (
    <Layout
      content={{
        dayOfWeek: "Saturday",
        dayDescription:
          'For Saturdays: "Protected by the Naga King", (Paang Naga Prok) the Buddha image sits on a large coiled serpent which rises to protect him from a raging storm. The Buddha sits in profound meditation, unaware of the tumult, as he is lifted over the rising waves by the King of Nagas.',
        image: saturn,
        link: "",
        styles: { color: "purple" },
      }}
    />
  );
}
