import React from "react";
import Content from "./Content";
import Accordion from "./Accordion";
import { questions, answers } from "../utility/questionsAndAnswers.js";

const Card = () => {
  return (
    <div className="card">
      <div className="card-container">
        <Content />
        {questions.map((el, idx) => (
          <Accordion props={{ question: el, answer: answers[idx] }} key={el} />
        ))}
      </div>
    </div>
  );
};

export default Card;
