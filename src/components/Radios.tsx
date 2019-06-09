import React from "react";
import { Form, Radio } from "semantic-ui-react";
import styled from "styled-components";

const StyledRadio = styled(Radio)`
  && label {
    color: ${props => (props.status && props.showCorrect ? "#10d410" : "")};
  }
`;

const Radios = ({ answers, value, handleChange, status, disabled }) => {
  const RadioButton = ({ text }) => {
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

  return (
    <>
      {answers.map(answer => (
        <Form.Field key={answer.id} disabled={disabled}>
          <RadioButton text={answer.text} />
        </Form.Field>
      ))}
    </>
  );
};

export default Radios;
