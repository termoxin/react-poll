import React, { Fragment } from "react";
import styled from "styled-components";
import { Icon, Card, List } from "semantic-ui-react";
import { format } from "date-fns";

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
}

const ScreenResult: React.FunctionComponent<Props> = ({ answers }) => {
  const getStatus = answer =>
    answer ? (
      <Icon name="check" color="olive" />
    ) : (
      <Icon name="close" color="red" />
    );

  const numberOfCorrects = (() => {
    const overall = Object.keys(answers).length;
    const correct = Object.values(answers).filter(answer => answer).length;

    return `${correct}/${overall}`;
  })();

  const date = format(new Date(), "MM.DD.YYYY HH:mm:ss");

  return (
    <Fragment>
      <StyledCard>
        <Card.Header>
          <ResultItem>{numberOfCorrects}</ResultItem>
          <DateItem>{date}</DateItem>
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

export default ScreenResult;
