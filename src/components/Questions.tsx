import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import Question from "./Question";
import ScreenResult from "./ScreenResult";

const Container = styled.div`
  display: flex;
`;

const Arrow = styled(Icon)`
  cursor: pointer;
  align-self: center;
  && {
    margin: 0 10px 0 10px;
  }
`;

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
  type: string;
}

interface State {
  answers: object;
  indexQuestion: number;
}

class Questions extends Component<Props, State> {
  static defaultProps: { type: string } = {
    type: "list"
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      indexQuestion: 0,
      answers: {}
    };
  }

  handleChecking = (status: boolean, text: string) => {
    this.setState(state => ({
      answers: { ...state.answers, [text]: status }
    }));
  };

  nextQuestion = () => {
    let { indexQuestion } = this.state;
    const { questions } = this.props;

    if (!(indexQuestion === questions.length)) {
      this.setState({
        indexQuestion: indexQuestion + 1
      });
    }
  };

  previousQuestion = () => {
    let { indexQuestion } = this.state;

    if (indexQuestion) {
     this.setState({
      indexQuestion: indexQuestion - 1
    });
    }

    
  };

  render() {
    const { questions, type } = this.props;
    const { answers, indexQuestion } = this.state;
    const length = Object.keys(answers).length;
    const QUESTIONS_TYPES = {
      LIST: "list",
      ARROWS: "arrows"
    };

    if (!questions.length) {
      return <h2>Please, upload a JSON file.</h2>;
    }

    if (length === questions.length) {
      return <ScreenResult answers={answers} />;
    }

    if (questions.length && type === QUESTIONS_TYPES.LIST) {
      return (
        <>
          {questions.map((q: QuestionProps) => (
            <Question key={q.id} {...q} handleChecking={this.handleChecking} />
          ))}
        </>
      );
    }

    if (questions.length && type === QUESTIONS_TYPES.ARROWS) {
      const currectQuestion: QuestionProps = questions[indexQuestion];

      return (
        <Container>
          <Arrow name="arrow left" size="big" onClick={this.previousQuestion} />
          <Question {...currectQuestion} handleChecking={this.handleChecking} />
          <Arrow name="arrow right" size="big" onClick={this.nextQuestion} />
        </Container>
      );
    }
  }
}

export default Questions;
