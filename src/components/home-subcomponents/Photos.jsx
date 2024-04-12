import React, { useState } from "react";
import laughs from "../../images/laughs.jpeg";
import medical from "../../images/medical.jpeg";
import dog from "../../images/dog.jpg";
import violaSession from "../../images/viola-session.jpg";

const Photos = () => {
  const [selectedImage, setSelectedImage] = useState(0);
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
    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : photos.length - 1);
  };

  const goNext = () => {
    setSelectedImage(
      selectedImage === photos.length - 1 ? 0 : selectedImage + 1
    );
  };

  return (
    <div className="home-photos">
      <div>
        <button onClick={goBack}>&lt;</button>
        <img
          src={photos[selectedImage].name}
          className={photos[selectedImage].className}
          alt={photos[selectedImage].alt}
        />
        <button onClick={goNext}>&gt;</button>
      </div>
    </div>
  );
};

export default Photos;
