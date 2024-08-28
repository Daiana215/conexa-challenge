import React from "react";
import { render, screen } from "@testing-library/react";
import { EpisodeCard } from "./index";
import { Episode } from "../../types";

jest.mock("../episode-table", () => ({
  TableEpisodes: jest.fn(() => <div data-testid="table-episodes" />),
}));

jest.mock("../../../../../../components/skeletons/episode", () => ({
  SkeletonEpisode: jest.fn(() => <div data-testid="skeleton" />),
}));

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

describe("EpisodeCard", () => {
  const mockEpisodes: Episode[] = [
    {
      id: 1,
      name: "Pilot",
      air_date: "December 2, 2013",
      episode: "S01E01",
      characters: ["Rick Sanchez", "Morty Smith"],
      url: "https://rickandmortyapi.com/api/episode/1",
      created: "2017-11-10T12:56:33.798Z",
    },
  ];

  it("should render the skeleton when loading", () => {
    render(
      <EpisodeCard
        title="Test Title"
        episodes={mockEpisodes}
        isLoading={true}
        characterSelected={false}
      />
    );

    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("should render the Empty component when character is not selected", () => {
    render(
      <EpisodeCard
        title="Test Title"
        episodes={mockEpisodes}
        isLoading={false}
        characterSelected={false}
        emptyText="No character selected"
      />
    );

    expect(screen.getByText("No character selected")).toBeInTheDocument();
    expect(screen.queryByTestId("table-episodes")).not.toBeInTheDocument();
  });

  it("should render the TableEpisodes component when character is selected", () => {
    render(
      <EpisodeCard
        title="Test Title"
        episodes={mockEpisodes}
        isLoading={false}
        characterSelected={true}
      />
    );

    expect(screen.getByTestId("table-episodes")).toBeInTheDocument();
    expect(screen.queryByText("No character selected")).not.toBeInTheDocument();
  });

  it("should render the card title", () => {
    render(
      <EpisodeCard
        title="Test Title"
        episodes={mockEpisodes}
        isLoading={false}
        characterSelected={true}
      />
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });
});
