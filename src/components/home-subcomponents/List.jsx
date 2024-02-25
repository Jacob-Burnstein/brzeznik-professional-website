import React from "react";
import ListCard from "./ListCard";

const List = () => {
  const namesAndDescriptions = [
    {
      name: "Physical Disabilites",
      description: "Here's how",
    },
    {
      name: "Intellectual/Developmental Disabilities",
      description: "Here's how",
    },
    {
      name: "Mental Health",
      description: "Here's how",
    },
    {
      name: "Memory Care",
      description: "Here's how",
    },
  ];

  return (
    <div className="listSection">
      <h2>How can music therapy help with different challenges?</h2>
      {namesAndDescriptions.map(({ name, description }, index) => (
        <ListCard key={index} name={name} description={description} />
      ))}
    </div>
  );
};

export default List;
