import React from "react";
import { render, screen } from "@testing-library/react";
import { EpisodesView } from "../episodes.view";
import { EpisodesViewProps } from "../types";

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

describe("EpisodesView", () => {
  const mockProps: EpisodesViewProps = {
    bothCharacters: [
      {
        id: 1,
        name: "episode",
        air_date: "air_date",
        episode: "episode1",
        characters: ["1", "2"],
        url: "url",
        created: "created",
      },
      {
        id: 2,
        name: "episode2",
        air_date: "air_date",
        episode: "episode",
        characters: ["1", "2"],
        url: "url",
        created: "created",
      },
    ],
    bothCharactersLoading: false,
    onlyCharacterOne: [
      {
        id: 1,
        name: "episode",
        air_date: "air_date",
        episode: "episode1",
        characters: ["1", "2"],
        url: "url",
        created: "created",
      },
      {
        id: 2,
        name: "episode2",
        air_date: "air_date",
        episode: "episode",
        characters: ["1", "2"],
        url: "url",
        created: "created",
      },
    ],
    onlyCharacterOneLoading: false,
    onlyCharacterTwo: [
      {
        id: 1,
        name: "episode",
        air_date: "air_date",
        episode: "episode1",
        characters: ["1", "2"],
        url: "url",
        created: "created",
      },
      {
        id: 2,
        name: "episode",
        air_date: "air_date",
        episode: "episode2",
        characters: ["1", "2"],
        url: "url",
        created: "created",
      },
    ],
    onlyCharacterTwoLoading: false,
    charactersSelected: {
      characterOne: 1,
      characterTwo: 2,
    },
  };

  test("should render episode cards with correct data", () => {
    render(<EpisodesView {...mockProps} />);

    expect(screen.getByText("Character #1 - Episodes")).toBeInTheDocument();
    expect(
      screen.getByText("Character #1 & Character #2 - Common Episodes")
    ).toBeInTheDocument();
    expect(screen.getByText("Character #2 - Episodes")).toBeInTheDocument();
  });

  test("should show empty state text when no characters are selected", () => {
    const emptyProps: EpisodesViewProps = {
      ...mockProps,
      charactersSelected: {},
    };

    render(<EpisodesView {...emptyProps} />);

    expect(screen.getByText("Select a character #1")).toBeInTheDocument();
    expect(screen.getByText("Select a character #1 & #2")).toBeInTheDocument();
    expect(screen.getByText("Select a character #2")).toBeInTheDocument();
  });
});
