import React, { useState } from "react";

const ListCard = ({ name, description }) => {
  const [isTitleClicked, setIsTitleClicked] = useState(false);
  const [isDescriptionClicked, setIsDescriptionClicked] = useState(false);

  const setTitleClick = () => {
    !isTitleClicked ? setIsTitleClicked(true) : setIsTitleClicked(false);
  };
  const setDescriptionClick = () => {
    !isDescriptionClicked
      ? setIsDescriptionClicked(true)
      : setIsDescriptionClicked(false);
  };

  const handleClick = () => {
    setTitleClick();
    setDescriptionClick();
  };

  return (
    <section>
      <h3
        className={isDescriptionClicked ? "titleHidden" : "listItemTitle"}
        onClick={() => handleClick()}
      >
        {name}
      </h3>
      <p
        className={!isTitleClicked ? "descriptionHidden" : "description"}
        onClick={() => handleClick()}
      >
        {description}
      </p>
    </section>
  );
};

export default ListCard;
