import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, test, expect } from "vitest";
// Importing jest-dom to extend matchers
import "@testing-library/jest-dom";
import React from "react";
import App from "../../src/App";

const testIdMap = {
  "/": "Home-Page",
  "/file-manager": "file-manager-ui",
  "/video-player": "video-player-ui",
  "/image-gallery": "image-gallery-ui",
  "/music-player": "music-player-ui",
};

function testNavigation(path: string, testId: string) {
  test(`Navigates to the ${testId}`, () => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
}

function testAllNavigation() {
  Object.entries(testIdMap).map(([path, testId]) => {
    testNavigation(path, testId);
  });
}

describe("Routing system should navigate correctly", () => {
  testAllNavigation();
});
