import React from "react";
import Radios from "./Radios";
import Checks from "./Checks";
import Fill from "./Fill";
import { IAnswer } from "../models/Answer.d.ts";

interface IQuestionTypeProps {
  status: boolean;
  type: string;
  answers: IAnswer[];
  value: any;
  handleChange: Function;
  correctAnswer: any;
  disabled: boolean;
}

const QuestionType: React.FC<IQuestionTypeProps> = ({
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
