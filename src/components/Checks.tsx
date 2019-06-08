import React from "react";
import styled from "styled-components";
import { Form, Checkbox } from "semantic-ui-react";

const StyledCheckbox = styled(Checkbox)`
  && label {
    color: ${props => (props.status && props.showCorrect ? "#10d410" : "")};
  }
`;

interface Props {
  answers: Array<string>;
  value: object;
  handleChange: Function;
  status: boolean;
  correctAnswer: string;
  showCorrect: boolean;
}

interface AnswerProps {
  id: string | number;
  text: string;
}

const Checks: React.FunctionComponent<Props> = ({
  answers,
  value,
  handleChange,
  status,
  correctAnswer,
  showCorrect = false
}) => (
  <>
    {answers.map((answer: AnswerProps) => (
      <Form.Field key={answer.id}>
        <StyledCheckbox
          status={status && correctAnswer.indexOf(answer.text) > -1}
          label={answer.text}
          value={value}
          showCorrect={showCorrect}
          name="checkbox"
          onChange={handleChange}
        />
      </Form.Field>
    ))}
  </>
);

export default Checks;
