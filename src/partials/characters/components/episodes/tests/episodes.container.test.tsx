import React from "react";
import { render, screen } from "@testing-library/react";
import { EpisodesContainer } from "../episodes.container";
import { useCharacterEpisodes } from "src/hooks/use-character-episodes";
import { useFilteredEpisodes } from "src/hooks/use-filtered-episodes";
import { useEpisodesData } from "src/hooks/use-episodes-data";
import { Episode } from "../types";

jest.mock("../../../../../hooks/use-character-episodes");
jest.mock("../../../../../hooks/use-filtered-episodes");
jest.mock("../../../../../hooks/use-episodes-data");

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

describe("EpisodesContainer", () => {
  const mockCharactersSelected = {
    characterOne: 1,
    characterTwo: 2,
  };

  const mockEpisode1: Episode = {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: ["Rick", "Morty"],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  };

  const mockEpisode2: Episode = {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    characters: ["Rick", "Morty"],
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.798Z",
  };

  const mockEpisode3: Episode = {
    id: 3,
    name: "Anatomy Park",
    air_date: "December 16, 2013",
    episode: "S01E03",
    characters: ["Rick", "Morty"],
    url: "https://rickandmortyapi.com/api/episode/3",
    created: "2017-11-10T12:56:33.798Z",
  };

  const mockCharacterOneEpisodes = [mockEpisode1, mockEpisode3];
  const mockCharacterTwoEpisodes = [mockEpisode2, mockEpisode3];
  const mockCommonEpisodes = [mockEpisode3];

  beforeEach(() => {
    (useCharacterEpisodes as jest.Mock).mockReturnValue({
      data: mockCharacterOneEpisodes,
    });

    (useCharacterEpisodes as jest.Mock).mockReturnValue({
      data: mockCharacterTwoEpisodes,
    });

    (useFilteredEpisodes as jest.Mock).mockReturnValue([
      mockCharacterOneEpisodes,
      mockCharacterTwoEpisodes,
      mockCommonEpisodes,
    ]);

    (useEpisodesData as jest.Mock).mockImplementation(
      (episodes: Episode[]) => ({
        data: episodes,
        isLoading: false,
      })
    );
  });

  it("renders EpisodesView with correct data", () => {
    render(<EpisodesContainer charactersSelected={mockCharactersSelected} />);

    expect(screen.getByText("Pilot")).toBeInTheDocument();
    expect(screen.getByText("Lawnmower Dog")).toBeInTheDocument();

    const anatomyParkEpisodes = screen.getAllByText("Anatomy Park");
    expect(anatomyParkEpisodes).toHaveLength(3);
  });
});
