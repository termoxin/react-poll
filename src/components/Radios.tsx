import React from "react";
import { Form } from "semantic-ui-react";
import RadioButton from "./RadioButton";

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
  type: string;
  key: number;
}

const Radios: React.FunctionComponent<Props> = ({
  answers,
  value,
  handleChange,
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
