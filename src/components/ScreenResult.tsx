import React, { Fragment } from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: self-end;
`;

interface Props {
  answers: object;
}

const ScreenResult: React.FunctionComponent<Props> = ({ answers }) => {
  const getStatus = answer =>
    answer ? (
      <Icon name="check" color="olive" />
    ) : (
      <Icon name="close" color="red" />
    );

  const numberOfCorrects = () => {
    const overall = Object.keys(answers).length;
    const correct = Object.values(answers).filter(answer => answer).length;

    return `${correct}/${overall}`;
  };

  return (
    <Fragment>
      <h1>Results | {numberOfCorrects()}</h1>
      <List>
        {Object.keys(answers).map(answer => (
          <li key={answer}>
            {answer} - {getStatus(answers[answer])}
          </li>
        ))}
      </List>
    </Fragment>
  );
};

export default ScreenResult;
