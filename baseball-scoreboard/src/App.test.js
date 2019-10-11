import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

afterEach(rtl.cleanup);

it("Renders the heading", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/scoreboard/i);
  expect(element).toBeVisible();
});

it("Renders the scoreboard", () => {
  const wrapper = rtl.render(<App />);
  const ballScore = wrapper.getByText(/balls/i);
  const strikeScore = wrapper.getByText(/strikes/i);
  const outScore = wrapper.getByText(/outs/i);
  expect(ballScore).toBeVisible();
  expect(strikeScore).toBeVisible();
  expect(outScore).toBeVisible();
});

it("Renders the dashboard", () => {
  const wrapper = rtl.render(<App />);
  const buttons = wrapper.getAllByRole("button");
  expect(buttons);
});
