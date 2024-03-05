import React from "react";

const QuestionsCard = ({ question, answer }) => {
  return (
    <div>
      <h2 className="question">{question}</h2>
      <p className="answer">{answer}</p>
    </div>
  );
};

export default QuestionsCard;
