import React, { Component } from "react";
import { Form, Card, Icon, Radio, Button } from "semantic-ui-react";
import styled from "styled-components";
import Radios from "./Radios";
import Checks from "./Checks";
import Fill from "./Fill";

const ButtonContent = styled(Card.Content)`
  display: flex;
  justify-content: flex-end;
`;

const StyledCard = styled(Card)`
  && {
    width: 768px;
    min-width: 320px;
  }
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
`;

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      status: null,
      disabled: false
    };
  }

  handleChange = (e, { value, checked }) => {
    const { type } = this.props;
    const { status } = this.state;

    console.log(type, status);

    if (type === "radio" && status) {
      this.setState({
        status: false
      });
    }

    if (type === "checkbox") {
      this.setState({
        value: { ...this.state.value, [value]: checked }
      });
    }

    if (type === "fill" || type === "radio") {
      this.setState({ value });
    }
  };

  handleCheckAnswer = () => {
    this.setState({
      disabled: true
    });

    const { correctAnswer, type } = this.props;
    const { value } = this.state;
    if (type === "fill" || type === "radio") {
      const status = value.toLowerCase() === correctAnswer.toLowerCase();
      this.setState({
        status
      });
    }
    if (type === "checkbox") {
      const isCorrect = Object.keys(value).every(
        a => correctAnswer.indexOf(a) > -1
      );
      console.log(isCorrect);
    }
  };

  render() {
    const { text, description, answers, type } = this.props;
    const { value, status, disabled } = this.state;

    const QuestionType = () => {
      if (type === "checkbox") {
        return (
          <Checks
            answers={answers}
            value={value}
            status={status ? status : undefined}
            handleChange={this.handleChange}
          />
        );
      }

      if (type === "radio") {
        return (
          <Radios
            answers={answers}
            value={value}
            status={status ? status : undefined}
            disabled={disabled}
            handleChange={this.handleChange}
          />
        );
      }

      if (type === "fill") {
        return (
          <Fill
            handleChange={this.handleChange}
            status={status ? status : undefined}
          />
        );
      }
    };

    return (
      <StyledCard>
        <Card.Content>
          <Card.Header>{text}</Card.Header>
          <Card.Description>
            {type !== "fill"
              ? "Check that you consider correct."
              : "Fill in this field."}
          </Card.Description>
        </Card.Content>
        <Card.Content>
          <StyledForm>{QuestionType()}</StyledForm>
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

Question.defaultProps = {
  type: "fill"
};

export default Question;
