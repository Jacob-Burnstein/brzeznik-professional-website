import React, { useState } from "react";
import laughs from "../../images/laughs.jpeg";
import medical from "../../images/medical.jpeg";
import dog from "../../images/dog.jpg";

const Photos = () => {
  const photos = [
    { name: medical, className: "portrait", alt: "Brianna in PPE" },
    { name: laughs, className: "landscape", alt: "Music therapy session" },
    { name: dog, className: "portrait", alt: "Brianna and dog" },
  ];
  return (
    <div className="home-photos">
      {photos.map((photo, index) => (
        <img key={photo.index} src={photo.name} />
      ))}
    </div>
  );
};

export default Photos;
