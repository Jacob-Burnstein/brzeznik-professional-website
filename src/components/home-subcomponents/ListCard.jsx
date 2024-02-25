import React, { useState } from "react";

const ListCard = ({ name, description }) => {
  const [isTitleClicked, setIsTitleClicked] = useState(false);

  const setTitleClick = () => {
    !isTitleClicked ? setIsTitleClicked(true) : setIsTitleClicked(false);
  };

  const handleClick = () => {
    setTitleClick();
  };

  return (
    <article className="description" onClick={() => handleClick()}>
      <div className="listTitleAndArrow">
        <h4 className="descriptionName">{name}</h4>
        {!isTitleClicked ? (
          <i className="fa-solid fa-chevron-right fa-xs"></i>
        ) : (
          <i className="fa-solid fa-chevron-down fa-xs"></i>
        )}
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
