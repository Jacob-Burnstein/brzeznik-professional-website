import React, { useState } from "react";

const ListCard = ({ name, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section>
      <h3
        className="listItemTitle"
        onClick={() => (!isClicked ? setIsClicked(true) : setIsClicked(false))}
      >
        {name}
      </h3>
      <p className={!isClicked ? "hidden" : "description"}>{description}</p>
    </section>
  );
};

export default ListCard;
