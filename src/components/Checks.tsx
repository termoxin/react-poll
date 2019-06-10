import React from "react";
import styled from "styled-components";
import { Form, Checkbox } from "semantic-ui-react";

const StyledCheckbox = styled(Checkbox)`
  /* && label {
    color: ${props => (props.status ? "#10d410" : "")};
  } */
`;

interface Props {
  answers: Array<object>;
  value: object;
  handleChange: Function;
  status: boolean | string;
  correctAnswer: Array<string>;
  disabled: boolean;
}

interface AnswerProps {
  id: number;
  text: string;
}

const Checks: React.FunctionComponent<Props> = ({
  answers,
  value,
  handleChange,
  status,
  correctAnswer,
  disabled
}) => (
  <>
    {answers.map((answer: AnswerProps) => (
      <Form.Field key={answer.id}>
        <StyledCheckbox
          status={status && correctAnswer.indexOf(answer.text) > -1}
          label={answer.text}
          value={answer.text}
          name="checkbox"
          disabled={disabled}
          onChange={handleChange}
        />
      </Form.Field>
    ))}
  </>
);

export default Checks;
