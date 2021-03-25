import React from "react";
import Layout from "../Components/Layout";
import mercury from "../media/mercury.jpg";

export default function Wednesday() {
  return (
    <Layout
      content={{
        dayOfWeek: "Wednesday",
        dayDescription:
          'For Wednesdays: it is common to see two images. One is a standing Buddha image holding an alms bowl. After four years in his ministry, Buddha journeyed to visit his father, younger brother and son. His father was appalled when Buddha "begged" for food holding an alms bowl. Buddha calmed his father informing him that the lineage of Buddhas was to perform pindabat, (Paang Oombaat) that is, to be available to followers who devotedly bring food. Still today, the virtue of giving is strong among Buddhist followers Also for Wednesday, an image for the evening is displayed. When Buddha sought solitude to meditate undisturbed, the animals of the forest brought him sustenance. Thus it is usual to see in a temple garden, a seated Buddha image with an elephant offering a bowl of fruit and an approaching monkey offering a honeycomb.',
        image: mercury,
        link: "",
        styles: { color: "green" },
      }}
    />
  );
}
