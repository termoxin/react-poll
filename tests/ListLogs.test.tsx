import React from "react";
import { create } from "react-test-renderer";
import ListLogs from "../src/components/ListLogs";

const logs = [
  {
    name: "Poll 1",
    id: 1,
    correct: 3,
    overall: 5,
    date: new Date() - 1000 * 3600 * 24 * 5
  },
  {
    name: "Poll 2",
    id: 2,
    correct: 9,
    overall: 10,
    date: new Date() - 1000 * 3600 * 24 * 30
  }
];

describe("ListLogs component", () => {
  it("ListLogs contains two li", () => {
    const component = create(<ListLogs logs={logs} />);
    const root = component.root;
    const li = root.findAll(element => element.type === "li");

    expect(li.length).toEqual(2);
  });
});
