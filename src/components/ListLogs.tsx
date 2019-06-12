import React from "react";
import styled from "styled-components";
import { dateToStr } from "../helpers/date";

const List = styled.nav``;

const ListItem = styled.li`
  display: flex;
  flex-grow: 1;
  font-size: 16px;
  margin: 10px;

  * {
    display: flex;
    justify-content: flex-start;
    flex: 1 1 0%;
    align-items: center;
  }
`;

const Id = styled.span`
  flex-basis: 5%;
  flex-grow: 0;
  font-weight: 700;
`;

const Date = styled.div`
  font-weight: 900;
  color: #9a9a9a;
  margin: 10px;
`;

const Name = styled.span``;

const Correct = styled.span`
  color: green;
`;

const Overall = styled.span`
  color: black;
`;

const ListLogs = ({ logs }) => (
  <List>
    {logs.map(({ id, name, date, correct, overall }, index) => (
      <ListItem key={id}>
        <Id>{index + 1}.</Id>
        <Name>{name}</Name>
        <Correct>
          {correct}/<Overall>{overall}</Overall>
        </Correct>
        <Date>{dateToStr(date)}</Date>
      </ListItem>
    ))}
  </List>
);

export default ListLogs;
