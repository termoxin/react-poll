import React, { Fragment } from "react";
import styled from "styled-components";
import { Icon, Card, List } from "semantic-ui-react";
import { write, read } from "../helpers/store";
import { getRandomStr } from "../helpers/string";
import { dateToStr } from "../helpers/date";

const StyledCard = styled(Card)`
  && {
    width: 768px;
    min-width: 320px;
  }
`;

const ListItem = styled.li`
  display: flex;
  font-size: 16px;
  margin: 10px;
`;

const DateItem = styled.div`
  font-weight: 900;
  color: #9a9a9a;
  margin: 10px;
`;

const ResultItem = styled.h1`
  && {
    margin: 5px;
  }
`;

interface Props {
  answers: object;
  name: string;
  logging: boolean;
}

const defaultProps: Props = {
  answers: {},
  logging: false,
  name: "name_" + +new Date()
};

const ScreenResult: React.FunctionComponent<Props> = ({ answers, name, logging }) => {
  let logs = read("logs");

  if (!logs) {
    logs = [];
  }

  const getStatus = answer =>
    answer ? (
      <Icon name="check" color="olive" />
    ) : (
      <Icon name="close" color="red" />
    );

  const numberOfCorrects = (() => {
    const id = getRandomStr(20);
    const date = new Date();
    const overall = Object.keys(answers).length;
    const correct = Object.values(answers).filter(answer => answer).length;

    if(logging) {
      write("logs", [...logs, { id, name, correct, overall, answers, date }])
    }

    return `${correct}/${overall}`;
  })();

  return (
    <Fragment>
      <StyledCard>
        <Card.Header>
          <ResultItem>{numberOfCorrects}</ResultItem>
          <DateItem>{dateToStr(new Date())}</DateItem>
        </Card.Header>
        <Card.Content>
          <List>
            {Object.keys(answers).map(answer => (
              <ListItem key={answer}>
                {getStatus(answers[answer])} {answer}
              </ListItem>
            ))}
          </List>
        </Card.Content>
      </StyledCard>
    </Fragment>
  );
};

ScreenResult.defaultProps = defaultProps;

export default ScreenResult;
