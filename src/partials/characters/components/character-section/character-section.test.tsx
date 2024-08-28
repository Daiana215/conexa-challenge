import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CharacterSection } from "./index";
import { mockedCharacters } from "partials/__mocks__/mock";

const mockOnSelectCharacter = jest.fn();

beforeAll(() => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    };
});

describe("CharacterSection", () => {
  it("should render the section title correctly", () => {
    render(
      <CharacterSection
        title="Main Characters"
        characters={mockedCharacters}
        onSelectCharacter={mockOnSelectCharacter}
      />
    );

    expect(screen.getByText("Main Characters")).toBeInTheDocument();
  });
});
