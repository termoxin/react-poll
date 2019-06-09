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
  correctAnswer: any;
  disabled: boolean;
}

const QuestionType: React.FunctionComponent<Props> = ({
  status,
  type,
  answers,
  ...rest
}) => {
  const validatedStatus = status ? "true" : "false";

  if (type === "checkbox") {
    return <Checks {...rest} status={validatedStatus} answers={answers} />;
  }

  if (type === "radio") {
    return <Radios {...rest} status={validatedStatus} answers={answers} />;
  }

  if (type === "fill") {
    return <Fill {...rest} status={validatedStatus} />;
  }
};

export default QuestionType;
