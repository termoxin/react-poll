import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import { read } from "../helpers/store";
import { dateToStr } from "../helpers/date";

const SCard = styled(Card)`
  && {
    width: 768px;
    min-width: 320px;
  }
`;

const List = styled.nav``;

const ListItem = styled.li`
  display: flex;
  flex-grow: 1;
  font-size: 16px;
  margin: 10px;

  * {
    display: flex;
    justify-content: flex-start;
    flex-grow: 1;
    align-items: center;
  }
`;

const Id = styled.span`
  font-weight: 700;
`;

const Date = styled.div`
  font-weight: 900;
  color: #9a9a9a;
  margin: 10px;
`;

const Name = styled.p``;

const Correct = styled.p`
  color: green;
`;

const Overall = styled.span`
  color: black;
`;

class Logs extends Component {
  render() {
    const logs = read("logs");

    return (
      <SCard>
        <Card.Content>
          <Card.Header>Logs</Card.Header>
          <Card.Description>Here are your logs.</Card.Description>
        </Card.Content>
        <Card.Content>
          <List>
            {logs.map(({ id, name, date, correct, overall }, index) => (
              <ListItem key={id}>
                <Id>{index + 1}.</Id>
                <Name>{name}</Name>
                <Date>{dateToStr(date)}</Date>
                <Correct>
                  {correct}/<Overall>{overall}</Overall>
                </Correct>
              </ListItem>
            ))}
          </List>
        </Card.Content>
        <Card.Content />
      </SCard>
    );
  }
}

export default Logs;
