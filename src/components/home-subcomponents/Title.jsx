import React from "react";
import placeholder from "../../images/placeholder.jpeg";
import jerbear from "../../images/jerbear.jpeg";
import checklist from "../../images/checklist.jpeg";

const image = placeholder;
const jeremy = jerbear;
const check = checklist;

const Title = () => {
  return (
    <header className="titleHeader">
      <div className="titleText">
        <h1 className="titleHeading">
          Music Therapy Services in and around Austin
        </h1>
        <h3 className="nameHeading">Brianna Rzeznik, MA, MTBC</h3>
      </div>
      <div className="header-images">
        <img src={image} alt="brianna in the closet" />
        <img src={jeremy} alt="Jer-bear" />
        <img src={check} alt="good times" />
      </div>
    </header>
  );
};

export default Title;
