import React from "react";
import Title from "./home-subcomponents/Title";
import Bio from "./home-subcomponents/Bio";
import Questions from "./home-subcomponents/Questions";
import List from "./home-subcomponents/List";
import ServicesOffered from "./home-subcomponents/ServicesOffered";
import Credentials from "./home-subcomponents/Credentials";

const HomePage = () => {
  return (
    <>
      <main>
        <Title />
        <Bio />
        <Questions />
        <section className="questionsAndServicesSection">
          <List />
          <ServicesOffered />
        </section>
        <Credentials />
      </main>
    </>
  );
};

export default HomePage;
