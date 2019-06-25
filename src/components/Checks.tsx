import React from "react";
import styled from "styled-components";
import { Form, Checkbox } from "semantic-ui-react";
import { IAnswer } from "../models/Answer";

const StyledCheckbox = styled(Checkbox)`
  /* && label {
    color: ${props => (props.status ? "#10d410" : "")};
  } */
`;

interface IChecksProps {
  answers: IAnswer[];
  value: object;
  handleChange: Function;
  status: boolean | string;
  correctAnswer: Array<string>;
  disabled: boolean;
}

const Checks: React.SFC<IChecksProps> = ({
  answers,
  value,
  handleChange,
  status,
  correctAnswer,
  disabled
}) => (
  <>
    {answers.map((answer: IAnswer) => (
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
