import React from "react";
import Title from "./subcomponents/Title";
import Bio from "./subcomponents/Bio";
import Questions from "./subcomponents/Questions";

const HomePage = () => {
  return (
    <>
      <main>
        <Title />
        <Bio />
        <Questions />
      </main>
    </>
  );
};

export default HomePage;
