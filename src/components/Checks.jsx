import React from "react";
import styled from "styled-components";
import { Form, Checkbox } from "semantic-ui-react";

const StyledCheckbox = styled(Checkbox)`
  && label {
    color: ${props => (props.status && props.showCorrect ? "#10d410" : "")};
  }
`;

const Checks = ({
  answers,
  value,
  handleChange,
  status,
  correctAnswer,
  showCorrect = false
}) => (
  <>
    {answers.map(answer => (
      <Form.Field key={answer.id}>
        <StyledCheckbox
          status={status && correctAnswer.indexOf(answer.text) > -1}
          label={answer.text}
          value={answer.text}
          showCorrect={showCorrect}
          name="checkbox"
          onChange={handleChange}
        />
      </Form.Field>
    ))}
  </>
);

export default Checks;
