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
      <article
        className={!isTitleClicked ? "descriptionHidden" : "description"}
        onClick={() => handleClick()}
      >
        <div className="listTitleAndArrow">
          <h4 className="descriptionName">{name}</h4>
          <i class="fa-solid fa-chevron-right fa-xs"></i>
        </div>
        <p>{description}</p>
      </article>
    </section>
  );
};

export default ListCard;
