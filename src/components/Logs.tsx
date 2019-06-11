import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "semantic-ui-react";

const SCard = styled(Card)`
  && {
    width: 768px;
    min-width: 320px;
  }
`;

class Logs extends Component {
  render() {
    return (
      <SCard>
        <Card.Content>
          <Card.Header>Logs</Card.Header>
          <Card.Description>Here are your logs.</Card.Description>
        </Card.Content>
        <Card.Content />
      </SCard>
    );
  }
}

export default Logs;
