import React from "react";
import Radios from "./Radios";
import Checks from "./Checks";
import Fill from "./Fill";

const QuestionType = ({ status, type, ...others }) => {
  if (type === "checkbox") {
    return <Checks {...others} status={status ? status : undefined} />;
  }

  if (type === "radio") {
    return <Radios {...others} status={status ? status : undefined} />;
  }

  if (type === "fill") {
    return <Fill status={status ? status : undefined} />;
  }
};

export default QuestionType;
