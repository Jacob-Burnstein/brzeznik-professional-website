import React, { useState } from "react";

const ListCard = ({ name, description }) => {
  const [isTitleClicked, setIsTitleClicked] = useState(false);
  const [isDescriptionClicked, setIsDescriptionClicked] = useState(false);

  const setTitleClick = () => {
    !isTitleClicked ? setIsTitleClicked(true) : setIsTitleClicked(false);
  };
  // const setDescriptionClick = () => {
  //   !isDescriptionClicked
  //     ? setIsDescriptionClicked(true)
  //     : setIsDescriptionClicked(false);
  // };

  const handleClick = () => {
    setTitleClick();
    // setDescriptionClick();
  };

  return (
    <article className="description" onClick={() => handleClick()}>
      <div className="listTitleAndArrow">
        <h4 className="descriptionName">{name}</h4>
        <i className="fa-solid fa-chevron-right fa-xs"></i>
      </div>
      <p
        className={
          !isTitleClicked ? "hiddenDescriptionText" : "descriptionText"
        }
      >
        {description}
      </p>
    </article>
  );
};

export default ListCard;
