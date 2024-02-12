import React from "react";
import Title from "./subcomponents/Title";
import Bio from "./subcomponents/Bio";
import Questions from "./subcomponents/Questions";
import List from "./subcomponents/List";
import ServicesOffered from "./subcomponents/ServicesOffered";
import Square from "./subcomponents/Square";

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
