import React from "react";
import { Radio } from "semantic-ui-react";
import styled from "styled-components";

const StyledRadio = styled(Radio)`
  /* && label {
    color: ${props => (props.status ? "#10d410" : "")};
  } */
`;

interface Props {
  text: string;
  value: string;
  handleChange: any;
}

const RadioButton: React.FunctionComponent<Props> = ({
  text,
  value,
  handleChange
}) => {
  let Comp = value === text ? StyledRadio : Radio;

  return (
    <Comp
      label={text}
      name="answer"
      value={text}
      checked={value === text}
      onChange={handleChange}
    />
  );
};

export default RadioButton;
