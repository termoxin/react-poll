import React, { Component } from "react";
import Question from "./Question";
import ScreenResult from "./ScreenResult";

interface QuestionProps {
  answers: Array<object>;
  correctAnswer: string;
  id: number | string;
  text: string;
  type: string;
  description: string;
  handleChange: Function;
}

interface Props {
  questions: Array<object>;
}

interface State {
  answers: object;
}

class Questions extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      answers: {}
    };
  }

  handleChecking = (status: boolean, text: string) => {
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
        {questions.map((q: QuestionProps) => (
          <Question key={q.id} {...q} handleChecking={this.handleChecking} />
        ))}
      </>
    );
  }
}

export default Questions;
