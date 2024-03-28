import React from "react";
import Title from "./home-subcomponents/Title";
import Bio from "./home-subcomponents/Bio";
import Questions from "./home-subcomponents/Questions";
import List from "./home-subcomponents/List";
import ServicesOffered from "./home-subcomponents/ServicesOffered";
import Credentials from "./home-subcomponents/Credentials";
import Photos from "./home-subcomponents/Photos";

const HomePage = () => {
  return (
    <>
      <main>
        <Title />
        <Bio />
        <Questions />
        <List />
        <ServicesOffered />
        <Credentials />
        <Photos />
      </main>
    </>
  );
};

export default HomePage;
