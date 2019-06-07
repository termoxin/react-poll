import React from "react";

interface Props {
  answers: Array<object>;
}

const ScreenResult: React.FunctionComponent<Props> = ({ answers }) =>
  JSON.stringify(answers);

export default ScreenResult;
