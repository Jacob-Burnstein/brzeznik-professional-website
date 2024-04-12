import React, { useState } from "react";
import laughs from "../../images/laughs.jpeg";
import medical from "../../images/medical.jpeg";
import dog from "../../images/dog.jpg";
import violaSession from "../../images/viola-session.jpg";

const Photos = () => {
  const photos = [
    { name: medical, className: "portrait", alt: "Brianna in PPE" },
    { name: laughs, className: "landscape", alt: "Music therapy session" },
    { name: dog, className: "portrait", alt: "Brianna and dog" },
    {
      name: violaSession,
      className: "landscape",
      alt: "Music therapy session",
    },
  ];
  return (
    <div className="home-photos">
      {photos.map((photo, index) => (
        <div>
          <button> &lt;</button>
          <img key={photo.index} src={photo.name} className={photo.className} />
          <button> &lt;</button>
        </div>
      ))}
    </div>
  );
};

export default Photos;
