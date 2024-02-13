import React, { useState } from "react";

const QuestionsCard = ({ question, answer }) => {
  const [isClicked, setClicked] = useState(true);

  return (
    <div>
      <h2
        className="question"
        // onClick={() => (!isClicked ? setClicked(true) : setClicked(false))}
      >
        {question}
      </h2>
      <p className={!isClicked ? "hidden" : "answer"}>{answer}</p>
    </div>
  );
};

export default QuestionsCard;
