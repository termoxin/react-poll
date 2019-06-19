import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";
import { read } from "../helpers/store";
import ListLogs from "./ListLogs";

const SCard = styled(Card)`
  && {
    width: 768px;
    min-width: 320px;
  }
`;

class Logs extends Component {
  render() {
    let logs = read("logs");

    logs = logs || [];

    return (
      <SCard>
        <Card.Content>
          <Card.Header>Logs</Card.Header>
          <Card.Description>Here are your logs.</Card.Description>
        </Card.Content>
        <Card.Content>
          <ListLogs logs={logs} />
        </Card.Content>
      </SCard>
    );
  }
}

export default Logs;
