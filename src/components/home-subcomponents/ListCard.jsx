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
    <article
      className={
        !isTitleClicked ? "description unclickedDescription" : "description"
      }
      onClick={() => handleClick()}
    >
      <div className="listTitleAndArrow">
        <h3 className={isTitleClicked ? "descriptionName" : ""}>{name}</h3>
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
