import { render, screen } from "@testing-library/react";

import App from "../src/App";
import React from "react";
import { Provider } from "react-redux";
import Store from "../src/redux/store";
describe("App", () => {
  it("jest running", () => {
    expect(true).toBe(true);
  });
  it("should render", () => {
    render(
      <Provider store={Store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/Promofocus/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("should open settings menu on clicking the settings function",()=>{
         
  })
});
