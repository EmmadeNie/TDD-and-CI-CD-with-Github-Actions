import React from "react";
import Layout from "../Components/Layout";
import sun from "../media/sun.jpg";

export default function Sunday() {
  return (
    <Layout
      content={{
        dayOfWeek: "Sunday",
        dayDescription:
          'For Sundays: "Seven Days Looking" (Paang Tawai Netr ), the image is standing with hands held down in front of the body. The left hand is covered by the right. This attitude represents the period after the Buddha had realized Enlightenment. He achieved the enlightened state as he sat under a Bho tree for seven days in deep meditation. It is said he then stood for a longer period in deep meditation.',
        image: sun,
        link: "",
        styles: { color: "red" },
      }}
    />
  );
}
