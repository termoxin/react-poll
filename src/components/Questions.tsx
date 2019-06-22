import React, { Component, Fragment } from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import Question from "./Question";
import ScreenResult from "./ScreenResult";
import { QUESTIONS_TYPES } from "../constants";

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
  questions: any;
  type: string;
  name: string;
  onDone: Function;
}

interface State {
  answers: object;
  indexQuestion: number;
}

class Questions extends Component<Props, State> {
  static defaultProps: { type: string; questions: any } = {
    type: "list",
    questions: []
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
    const qLength = questions.length;

    if (qLength - 1 > indexQuestion && qLength > 1) {
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
    const { questions, type, name, logging, onDone } = this.props;
    const { answers, indexQuestion } = this.state;
    const length = Object.keys(answers).length;
    const qsLength = [].length || questions.length;

    if (!qsLength) {
      return <Fragment />;
    }

    if (length === qsLength) {
      if(onDone) {
        onDone();
      }

      return <ScreenResult answers={answers} logging={logging} />;
    }

    if (qsLength && type === QUESTIONS_TYPES.LIST) {
      const qs = questions || [];

      return (
        <>
          {qs.map((q: QuestionProps) => (
            <Question
              key={q.id}
              handleChecking={this.handleChecking}
              count={qsLength}
              {...q}
            />
          ))}
        </>
      );
    }

    if (qsLength && type === QUESTIONS_TYPES.ARROWS) {
      const currectQuestion: QuestionProps = questions[indexQuestion];

      return (
        <Container key={currectQuestion.id}>
          <Arrow name="arrow left" size="big" onClick={this.previousQuestion} />
          <Question
            {...currectQuestion}
            handleChecking={this.handleChecking}
            count={qsLength}
          />
          <Arrow name="arrow right" size="big" onClick={this.nextQuestion} />
        </Container>
      );
    }
  }
}

export default Questions;
