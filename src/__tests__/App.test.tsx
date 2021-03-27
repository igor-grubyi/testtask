import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import App from "../App";

function renderApp() {
  return render(<App />);
}

describe("<App />", () => {
  test("should display a blank page with play button", async () => {
    const { findByTestId } = renderApp();

    const playButton = await findByTestId('play-button');

    expect(playButton).toBeVisible();
  });
});