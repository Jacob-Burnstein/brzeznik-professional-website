import React from "react";
import Square from "./Square";

const Title = () => {
  return (
    <header className="titleHeader">
      <Square />
      <div className="titleText">
        <h1 className="titleHeading">
          Music Therapy Services in and around Austin
        </h1>
        <h3 className="nameHeading">Brianna Rzeznik, MA, MTBC</h3>
      </div>
      <img src="src/images/placeholder.jpeg" alt="brianna in the closet" />
    </header>
  );
};

export default Title;
