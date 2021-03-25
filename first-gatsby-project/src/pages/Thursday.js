import React from "react";
import Layout from "../Components/Layout";
import jupiter from "../media/jupiter.jpg";

export default function Thursday({ content }) {
  return (
    <Layout
      content={{
        dayOfWeek: "Thursday",
        dayDescription:
          'For Thursdays: "The Meditating Buddha" (Paang Nung Samadhi) in a sitting pose is a reminder of the classic posture for meditation. The full lotus with both soles upward and visible, the hands resting in the lap, right above left with all fingers extended, palms upward. In this position, some meditators feel the body is receptive to energy entering through the top of the head and through the open palms.',
        image: jupiter,
        link: "",
        styles: { color: "orange" },
      }}
    />
  );
}
