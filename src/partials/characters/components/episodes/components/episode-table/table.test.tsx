import React from "react";
import { render } from "@testing-library/react";
import { TableEpisodes } from "./index";
import { Episode } from "../../types";

const mockData: Episode[] = [
  {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z",
  },
  {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    characters: [],
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z",
  },
];

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

describe("TableEpisodes", () => {
  it("renders table with provided data", () => {
    const { getByText } = render(<TableEpisodes dataSource={mockData} />);

    expect(getByText("S01E01")).toBeInTheDocument();
    expect(getByText("Pilot")).toBeInTheDocument();
    expect(getByText("December 2, 2013")).toBeInTheDocument();

    expect(getByText("S01E02")).toBeInTheDocument();
    expect(getByText("Lawnmower Dog")).toBeInTheDocument();
    expect(getByText("December 9, 2013")).toBeInTheDocument();
  });

  it("renders table with pagination", () => {
    const { container } = render(<TableEpisodes dataSource={mockData} />);

    const paginationElement = container.querySelector(".ant-table-pagination");
    expect(paginationElement).toBeInTheDocument();
  });

  it("renders single data item correctly", () => {
    const singleData: Episode[] = [mockData[0]];
    const { getByText } = render(<TableEpisodes dataSource={singleData} />);

    expect(getByText("S01E01")).toBeInTheDocument();
    expect(getByText("Pilot")).toBeInTheDocument();
    expect(getByText("December 2, 2013")).toBeInTheDocument();
  });
});
