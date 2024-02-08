import React, { useState } from "react";

const ListCard = ({ name, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section>
      <h5
        className="listItemTitle"
        onClick={() => (!isClicked ? setIsClicked(true) : setIsClicked(false))}
      >
        {name}
      </h5>
      <p className={!isClicked ? "hidden" : "description"}>{description}</p>
    </section>
  );
};

export default ListCard;
