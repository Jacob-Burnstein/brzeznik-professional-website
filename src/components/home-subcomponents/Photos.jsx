import React, { useState } from "react";
import laughs from "../../images/laughs.jpeg";
import medical from "../../images/medical.jpeg";
import dog from "../../images/dog.jpg";
import violaSession from "../../images/viola-session.jpg";

const Photos = () => {
  const [selectedIndeces, setSelectedIndeces] = useState([0, 1, 2]);

  const photos = [
    {
      name: violaSession,
      className: "landscape",
      alt: "Music therapy session",
    },
    { name: medical, className: "portrait", alt: "Brianna in PPE" },
    { name: laughs, className: "landscape", alt: "Music therapy session" },
    { name: dog, className: "portrait", alt: "Brianna and dog" },
  ];

  const goBack = () => {
    selectedIndeces((prevIndeces) =>
      prevIndeces.map((index) => {
        if (index - 1 < 0) return photos.length - 1;
        else return index - 1;
      })
    );
  };

  const goNext = () => {
    setSelectedIndeces((prevIndeces) =>
      prevIndeces.map((index) => {
        if (index + 1 === photos.length) return 0;
        else return index + 1;
      })
    );
  };

  return (
    <div className="home-photos">
      <i
        className="fa-solid fa-arrow-left arrow back-arrow"
        onClick={goBack}
      ></i>
      {selectedIndeces.map((index) => (
        <img
          src={photos[index].name}
          className={photos[index].className}
          alt={photos[index].alt}
        />
      ))}
      <i
        className="fa-solid fa-arrow-right arrow next-arrow"
        onClick={goNext}
      ></i>
    </div>
  );
};

export default Photos;
