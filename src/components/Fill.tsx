import React from "react";
import styled from "styled-components";
import { Input } from "semantic-ui-react";

const StyledInput = styled(Input)`
  align-self: stretch;
  border-radius: 5px;
  border: ${props =>
    props.status && props.showCorrect ? "1px solid #10d4108a" : undefined};
`;

interface Props {
  handleChange: Function;
  showCorrect: boolean;
  status: string;
}

const Fill: React.FunctionComponent<Props> = ({
  handleChange,
  status,
  showCorrect
}) => (
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
