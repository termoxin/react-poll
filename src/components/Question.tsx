import React, { Component } from "react";
import { Form, Card, Icon, Radio, Button } from "semantic-ui-react";
import styled from "styled-components";
import QuestionType from "./QuestionType";
import merge from "../helpers/merge";

const ButtonContent = styled(Card.Content)`
  display: flex;
  justify-content: flex-end;
`;

const StyledCard = styled(Card)`
  && {
    width: 600px;
    min-width: 320px;
  }
`;

const CardHeader = styled(Card.Header)`
  && {
    display: flex;
    justify-content: space-evenly;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

const CardTextID = styled.span`
  font-size: 13px;
  font-weight: 400;
`;

const CardTextP = styled.p``;

Button.displayName = "Button";

interface Props {
  answers: Array<object>;
  correctAnswer: string;
  handleChecking: Function;
  id: number | string;
  text: string;
  type: string;
  description: string;
  handleChange: Function;
  count: number;
}

interface State {
  inputValue: string | object;
  status: boolean;
  disabled?: boolean;
}

interface CheckboxProps {
  value: string;
  checked: boolean;
}

class Question extends Component<Props, State> {
  static defaultProps: { type: string; disabled: boolean } = {
    type: "fill",
    disabled: false
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      inputValue: "",
      status: null,
      disabled: false
    };
  }

  handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    data: CheckboxProps
  ) => {
    const { type } = this.props;
    const { status, inputValue } = this.state;

    if (data) {
      const { value, checked } = data;

      if (type === "radio" && status) {
        this.setState({
          status: false
        });
      }

      if (type === "checkbox") {
        this.setState({
          inputValue: merge(inputValue, { [value]: checked })
        });
      }

      if (type === "fill" || type === "radio") {
        this.setState({ inputValue: value });
      }
    }
  };

  handleCheckAnswer = () => {
    const { correctAnswer, type, handleChecking, text } = this.props;
    const { inputValue, status } = this.state;
    const handleCheckingOrPureFunction = handleChecking || function() {};

    if (type === "fill" || type === "radio") {
      const iv = inputValue.toString().toLowerCase();
      let ca =
        typeof correctAnswer !== "undefined" ? correctAnswer.toLowerCase() : "";

      const status = iv === ca;
      this.setState({
        status
      });
    }

    if (type === "checkbox") {
      const currentAnswer = Object.keys(inputValue).filter(
        answer => inputValue[answer]
      );

      if (currentAnswer.length !== correctAnswer.length) {
        this.setState({ status: false });
      } else {
        const isCorrect = currentAnswer.every(
          a => correctAnswer.indexOf(a) > -1
        );

        this.setState({
          status: isCorrect
        });
      }
    }

    this.setState(
      {
        disabled: true
      },
      () => handleCheckingOrPureFunction(this.state.status, text)
    );
  };

  render() {
    const { text, answers, type, correctAnswer, id, count } = this.props;
    const { inputValue, status, disabled } = this.state;

    return (
      <StyledCard>
        <Card.Content>
          <Card.Header>
            <CardTextID>
              {id}/{count}
            </CardTextID>
            <CardTextP>{text}</CardTextP>
          </Card.Header>
          <Card.Description>
            {type !== "fill"
              ? "Check that you consider correct."
              : "Fill in this field."}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <StyledForm>
            <QuestionType
              type={type}
              value={inputValue}
              answers={answers}
              status={status}
              disabled={disabled}
              correctAnswer={correctAnswer}
              handleChange={this.handleChange}
            />
          </StyledForm>
        </Card.Content>
        <ButtonContent>
          <Button
            secondary
            onClick={this.handleCheckAnswer}
            disabled={disabled}
          >
            Ok
          </Button>
        </ButtonContent>
      </StyledCard>
    );
  }
}

export default Question;
