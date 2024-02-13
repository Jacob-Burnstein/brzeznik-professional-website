import React from "react";
import placeholder from "../../images/placeholder.jpeg";

const image = placeholder;

const Title = () => {
  return (
    <header className="titleHeader">
      <div className="titleText">
        <h1 className="titleHeading">
          Music Therapy Services in and around Austin
        </h1>
        <h3 className="nameHeading">Brianna Rzeznik, MA, MTBC</h3>
      </div>
      <img src={image} alt="brianna in the closet" />
    </header>
  );
};

export default Title;
