import React, { Fragment } from "react";

interface Props {
  answers: object;
}

const ScreenResult: React.FunctionComponent<Props> = ({ answers }) => (
  <Fragment>
    <h1>Results</h1>
    {JSON.stringify(answers)}
  </Fragment>
);

export default ScreenResult;
