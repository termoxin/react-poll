import React from "react";
import styled from "styled-components";
import { Input } from "semantic-ui-react";

const StyledInput = styled(Input)`
  align-self: stretch;
  border-radius: 5px;
  border: ${props =>
    props.status && props.showCorrect ? "1px solid #10d4108a" : undefined};
`;

const Fill = ({ handleChange, status, showCorrect = false }) => (
  <>
    <StyledInput
      showCorrect={showCorrect}
      status={status}
      placeholder="Type your answer here"
      onChange={handleChange}
    />
  </>
);

export default Fill;
