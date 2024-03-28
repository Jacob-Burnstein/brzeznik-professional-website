import React from "react";
import laughs from "../../images/laughs.jpeg";
import medical from "../../images/medical.jpeg";
import dog from "../../images/dog.jpg";

const Photos = () => {
  return (
    <div className="home-photos">
      <img className="portrait" src={medical} alt="Brianna in PPE" />
      <img className="landscape" src={laughs} alt="Music therapy session" />
      <img className="portrait" src={dog} alt="Brianna and dog" />
    </div>
  );
};

export default Photos;
