import React from "react";
import Title from "./home-subcomponents/Title";
import Bio from "./home-subcomponents/Bio";
import Questions from "./home-subcomponents/Questions";
import List from "./home-subcomponents/List";
import ServicesOffered from "./home-subcomponents/ServicesOffered";

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
      </main>
    </>
  );
};

export default HomePage;
