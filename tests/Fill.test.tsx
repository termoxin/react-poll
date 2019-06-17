import React from "react";
import { create } from "react-test-renderer";
import Fill from "../src/components/Fill";

describe("Fill component", () => {
  it("if props.disabled is true input is disabled", () => {
    const component = create(<Fill disabled={true} />);
    const root = component.root;
    const input = root.findByType("input");

    expect(input.props.disabled).toEqual(true);
  });
});
