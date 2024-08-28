import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CharacterCard } from "./index";
import { mockedCharacters } from "partials/__mocks__/mock";

const mockOnSelect = jest.fn();

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

describe("CharacterCard", () => {
  it("should render character details correctly", () => {
    render(
      <CharacterCard character={mockedCharacters[0]} onSelect={mockOnSelect} />
    );

    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();

    const avatarImage = screen.getByRole("img");
    expect(avatarImage).toHaveAttribute("src", mockedCharacters[0].image);
  });

  it("should render the correct number of CharacterCard components", () => {
    render(
      <CharacterCard character={mockedCharacters[0]} onSelect={jest.fn()} />
    );

    const characterCards = screen.getAllByTestId("cardChar");
    console.log(characterCards);

    expect(characterCards).toHaveLength(1);
  });
});
