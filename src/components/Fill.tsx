import React from "react";
import styled from "styled-components";
import { Input } from "semantic-ui-react";

const StyledInput = styled(Input)`
  align-self: stretch;
  border-radius: 5px;
  /* border: ${props => (props.status ? "1px solid #10d4108a" : undefined)}; */
`;

interface Props {
  handleChange: Function;
  status: string;
  disabled: boolean;
}

const Fill: React.FunctionComponent<Props> = ({
  handleChange,
  status,
  disabled
}) => (
  <>
    <StyledInput
      disabled={disabled}
      status={status}
      placeholder="Type your answer here"
      onChange={handleChange}
    />
  </>
);

export default Fill;
