import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import { read } from "../helpers/store";

const SCard = styled(Card)`
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
          <ul>
            {logs.map(log => (
              <ListItem key={log.id}>{log.name}</ListItem>
            ))}
          </ul>
        </Card.Content>
        <Card.Content />
      </SCard>
    );
  }
}

export default Logs;
