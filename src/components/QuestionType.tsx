import React from "react";
import Radios from "./Radios";
import Checks from "./Checks";
import Fill from "./Fill";

const QuestionType = ({ status, type, ...rest }) => {
  const validatedStatus = status ? status.toString() : undefined;

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
