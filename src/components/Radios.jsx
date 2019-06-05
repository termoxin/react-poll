import React from "react";
import { Form, Radio } from "semantic-ui-react";
import styled from "styled-components";

const StyledRadio = styled(Radio)`
  && label {
    color: ${props => (props.status ? "#10d410" : "")};
  }
`;

const Radios = ({ answers, value, handleChange, status, disabled }) => {
  return (
    <>
      {answers.map(answer => (
        <Form.Field key={answer.id} disabled={disabled}>
          {value === answer.text && status ? (
            <StyledRadio
              status={status}
              label={answer.text}
              name="answer"
              value={answer.text}
              checked={value === answer.text}
              onChange={handleChange}
            />
          ) : (
            <Radio
              status={status}
              label={answer.text}
              name="answer"
              value={answer.text}
              checked={value === answer.text}
              onChange={handleChange}
            />
          )}
        </Form.Field>
      ))}
    </>
  );
};

export default Radios;
