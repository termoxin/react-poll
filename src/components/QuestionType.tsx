import React from "react";
import Radios from "./Radios";
import Checks from "./Checks";
import Fill from "./Fill";

interface Props {
  status: boolean;
  type: string;
  answers: Array<object>;
  value: any;
  handleChange: Function;
  correctAnswer: string;
  disabled: boolean;
}

const QuestionType: React.FunctionComponent<Props> = ({
  status,
  type,
  ...rest
}) => {
  const validatedStatus: string = status ? status.toString() : undefined;

  if (type === "checkbox") {
    return <Checks {...rest} status={validatedStatus} />;
  }

  if (type === "radio") {
    return <Radios {...rest} status={validatedStatus} />;
  }

  if (type === "fill") {
    return <Fill {...rest} status={validatedStatus} />;
  }
};

export default QuestionType;
