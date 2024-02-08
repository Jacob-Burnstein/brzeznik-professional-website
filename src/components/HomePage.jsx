import React from "react";
import Title from "./subcomponents/Title";
import Bio from "./subcomponents/Bio";
import Questions from "./subcomponents/Questions";
import List from "./subcomponents/List";

const HomePage = () => {
  return (
    <>
      <main>
        <Title />
        <Bio />
        <Questions />
        <List />
      </main>
    </>
  );
};

export default HomePage;
