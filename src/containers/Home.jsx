import React from "react";
import Question from "../components/Question";

const radioQuestion = {
  text: "What is render method in React library?",
  correctAnswer: "It's a function that render a React Element.",
  answers: [
    { id: 1, text: "It's a function for multiple numbers." },
    { id: 2, text: "It's a function that render a React Element." },
    { id: 3, text: "I don't know." }
  ]
};

const checkboxQuestion = {
  text: "Choose fruits in this list.",
  correctAnswer: ["Apple", "Orange"],
  answers: [
    { id: 1, text: "Apple" },
    { id: 2, text: "Orange" },
    { id: 3, text: "Eggplant" }
  ]
};

const fillQuestions = {
  text: "What is the one of the most important thing in our life?",
  correctAnswer: "The opportunity to live"
};

const Home = () => (
  <div>
    <Question type="radio" {...radioQuestion} />
    <Question type="checkbox" {...checkboxQuestion} />
    <Question type="fill" {...fillQuestions} />
  </div>
);

export default Home;
