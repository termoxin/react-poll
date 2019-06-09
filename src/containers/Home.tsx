import React from "react";
import Questions from "../components/Questions";

const questions = [
  {
    id: 1,
    type: "radio",
    text: "What is render method in React library?",
    correctAnswer: "It's a function that render a React Element.",
    answers: [
      { id: 1, text: "It's a function for multiple numbers." },
      { id: 2, text: "It's a function that render a React Element." },
      { id: 3, text: "I don't know." }
    ]
  },
  {
    id: 2,
    type: "checkbox",
    text: "Choose fruits in this list.",
    correctAnswer: ["Apple", "Orange"],
    answers: [
      { id: 1, text: "Apple" },
      { id: 2, text: "Orange" },
      { id: 3, text: "Eggplant" }
    ]
  },
  {
    id: 3,
    type: "fill",
    text: "What is the one of the most important thing in our life?",
    correctAnswer: "The opportunity to live"
  }
];

const Home = () => (
  <div>
    <Questions questions={questions} />
  </div>
);

export default Home;