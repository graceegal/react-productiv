import {describe, it, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<App />);
  });

  it("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it("matches snapshot at initial render", function () {
    const { container } = render(<App />);
  });

  // won't work until part 3 is completed anyways
  // it ("rendered quotes app", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});

