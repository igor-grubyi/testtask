import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";

import App from "../App";
import { Events } from '../components/events/events';

function renderApp() {
  return render(<App />);
}

describe("<App />", () => {
  test("should display a <video> element on start", async () => {
    const { findByTestId } = renderApp();

    const videoElement = await findByTestId('video');

    expect(videoElement).toBeVisible();
  });

  test("shouldn't display a replay button on start", async () => {
    const { queryByTestId } = renderApp();

    const replay = await queryByTestId('replay-button');

    expect(replay).toBeNull();
  });

  test("should display a replay button after endGame", async () => {

  });
});

describe('<Events />', () => {
  test("shold display ticker", async () => {
    const { findByTestId } = render(<Events currentTime={0} onEndGame={() => {}} />);

    const ticker = await findByTestId('ticker');

    expect(ticker).toBeVisible();
  });
});