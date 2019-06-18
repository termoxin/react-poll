import React from "react";
import { create } from "react-test-renderer";
import ScreenResult from "../src/components/ScreenResult";

describe("ScreenResult component", () => {
  it("answers length 0 if array is empty", () => {
    const component = create(<ScreenResult />);
    const { root } = component;

    const li = root.findAll(element => element.type === "li");

    expect(li.length).toEqual(0);
  });

  it("amount of elements is 3 ", () => {
    const answers = { quiz1: true, quiz2: false, quiz3: true };
    const component = create(<ScreenResult answers={answers} />);
    const { root } = component;

    const li = root.findAll(element => element.type === "li");

    expect(li.length).toEqual(3);
  });

  it("result is 2/3", () => {
    const answers = { quiz1: true, quiz2: false, quiz3: true };
    const component = create(<ScreenResult answers={answers} />);
    const { root } = component;

    const h1 = root.findByType("h1");

    expect(h1.props.children).toEqual("2/3");
  });
});
