import React from "react";
import main from "../../images/main.jpeg";

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
        <img src={main} alt="Brianna Rzeznik" />
      </div>
    </header>
  );
};

export default Title;
