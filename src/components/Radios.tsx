import React from "react";
import { Form, Radio } from "semantic-ui-react";
import styled from "styled-components";

const StyledRadio = styled(Radio)`
  /* && label {
    color: ${props => (props.status ? "#10d410" : "")};
  } */
`;

interface Props {
  answers: Array<object>;
  disabled: boolean;
  handleChange: Function;
  status: string;
  value: string;
}

interface AnswerProps {
  id: number;
  text: string;
}

interface RadioButtonProps {
  text: string;
  value: string;
  handleChange: Function;
}

const RadioButton: React.FunctionComponent<RadioButtonProps> = ({
  text,
  value,
  handleChange
}) => {
  let Comp = value === text && status ? StyledRadio : Radio;
  Comp = (
    <Comp
      status={status}
      label={text}
      name="answer"
      value={text}
      checked={value === text}
      onChange={handleChange}
    />
  );
  return Comp;
};

const Radios: React.FunctionComponent<Props> = ({
  answers,
  value,
  handleChange,
  status,
  disabled
}) => {
  return (
    <>
      {answers.map((answer: AnswerProps) => (
        <Form.Field key={answer.id} disabled={disabled}>
          <RadioButton
            text={answer.text}
            handleChange={handleChange}
            value={value}
          />
        </Form.Field>
      ))}
    </>
  );
};

export default Radios;
