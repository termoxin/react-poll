import React, { Component } from "react";
import Question from "./Question";
import ScreenResult from "./ScreenResult";

class Questions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      answers: {}
    };
  }

  handleChecking = (status, text) => {
    this.setState(state => ({
      answers: { ...state.answers, [text]: status }
    }));
  };

  render() {
    const { questions } = this.props;
    const { answers } = this.state;
    const length = Object.keys(answers).length;

    if (length === questions.length) {
      return <ScreenResult answers={answers} />;
    }

    return (
      <>
        {questions.map(q => (
          <Question key={q.id} {...q} handleChecking={this.handleChecking} />
        ))}
      </>
    );
  }
}

export default Questions;
