import React from "react";
import { shallow, mount } from "enzyme";
import { create } from "react-test-renderer";
import "jest-enzyme";
import Question from "../src/components/Question";

const answers = [
  { id: 1, text: "Yeah!" },
  { id: 2, text: "No!" },
  { id: 3, text: "Probably." }
];

describe("Question component", () => {
  // @TODO: If you are not make sure that it won't change not it'll launch

  it("matches the snapshot", () => {
    const tree = create(<Question />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("disabled should be true when button is clicked", () => {
    const component = create(<Question />);
    const rootInstance = component.root;
    const button = rootInstance.findByType("button");

    button.props.onClick();

    expect(button.props.disabled).toEqual(true);
  });

  it("question index is 5", () => {
    const component = create(<Question id={5} count={10} />);
    const rootInstance = component.root;
    const span = rootInstance.findByType("span");
    const index = span.props.children.join("");

    expect(index).toEqual("5/10");
  });

  it("question index is 'Text'", () => {
    const component = create(<Question text="Text" />);
    const rootInstance = component.root;
    const span = rootInstance.findByType("p");
    const text = span.props.children;

    expect(text).toEqual("Text");
  });

  it("there is right input type - checkbox", () => {
    const component = create(
      <Question type="checkbox" answers={answers} correctAnswer={["Yeah!"]} />
    );

    const root = component.root;
    const listOfCheckboxes = root.findAll(element => element.type === "input");

    expect(listOfCheckboxes[0].props.value).toBe("Yeah!");
    expect(listOfCheckboxes[2].props.value).toBe("Probably.");
  });

  it("there is right input type - fill", () => {
    const component = create(<Question correctAnswer="TEXT" />);
    const root = component.root;
    const input = root.findByType("input").props.type;

    expect(input).toEqual("text");
  });

  it("there is right input type - radio", () => {
    const component = create(
      <Question type="radio" answers={answers} correctAnswer="TEXT" />
    );
    const root = component.root;
    const listOfRadios = root.findAll(element => element.type === "input");

    expect(listOfRadios[0].props.value).toBe("Yeah!");
    expect(listOfRadios[2].props.value).toBe("Probably.");
  });
});
