import React from "react";
import Layout from "../Components/Layout";
import moon from "../media/moon.jpg";

export default function Monday() {
  return (
    <Layout
      content={{
        dayOfWeek: "Monday",
        dayDescription:
          'For Mondays: one of three images could represent this day. "Pacifying the Relatives" (Paang Harm Samoot) is a standing image with right hand raised; this was the posture of Buddha when he persuaded disputing family members to peacefully compromise. "Forbidding the Sandalwood Image" refers to the time when Buddha halted a sandalwood image in his likeness from rising off an altar; it is a standing image with the left hand raised. The image representing "Mastery over Passions" is a standing image with both hands raised; this is from the parable of Buddha performing a miracle by calming the ocean.',
        image: moon,
        link: "",
        styles: { color: "#FFC74A" },
      }}
    />
  );
}
