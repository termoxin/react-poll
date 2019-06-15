import React from "react";
import { shallow, mount } from "enzyme";
import Question from "../src/components/Question";
import "jest-enzyme";
import "jest-styled-components";

describe("Question component", () => {
  it("disabled should be true when button is clicked", () => {
    const wrapper = shallow(<Question />);
    const okButton = wrapper.find("Button");

    okButton.simulate("click");

    expect(wrapper.state().disabled).toEqual(true);
  });
});
