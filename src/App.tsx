import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import styled from "styled-components";
import Routes from "./Routes";

const List = styled.nav`
  display: flex;
  justify-content: space-around;
  margin: 10px;

  li {
    font-size: 20px;
    list-style: none;
    flex: 1 1 50%;
  }
`;

const App = () => (
  <BrowserRouter>
    <main className="container">
      <List>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/logs">Logs</Link>
        </li>
      </List>
      <Routes />
    </main>
  </BrowserRouter>
);

export default App;
