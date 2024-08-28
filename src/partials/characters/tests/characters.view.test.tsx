import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { CharactersContainer } from "../characters.container";
import { getCharacters } from "../../../services/characters-service";
import { usePagination } from "ahooks";
import { Data } from "ahooks/lib/usePagination/types";
import { CharactersView } from "../characters.view";
import { mockedCharacters } from "../../__mocks__/mock";

jest.mock("../../../services/characters-service", () => ({
  getCharacters: jest.fn(),
}));

jest.mock("ahooks", () => ({
  usePagination: jest.fn(),
  useUpdateEffect: jest.fn((effect, deps) => React.useEffect(effect, deps)),
}));

const mockedGetCharacters = getCharacters as jest.MockedFunction<
  typeof getCharacters
>;
const mockedUsePagination = usePagination as jest.MockedFunction<
  typeof usePagination
>;

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

describe("CharactersContainer", () => {
  beforeEach(() => {
    mockedUsePagination.mockReturnValue({
      data: {
        list: [
          { id: 1, name: "Rick" },
          { id: 2, name: "Morty" },
        ],
        total: 100,
      },
      pagination: {
        current: 1,
        onChange: jest.fn(),
        pageSize: 0,
        total: 0,
        totalPage: 0,
        changeCurrent: function (): void {
          throw new Error("Function not implemented.");
        },
        changePageSize: function (): void {
          throw new Error("Function not implemented.");
        },
      },
      refresh: jest.fn(),
      loading: false,
      params: [],
      cancel: function (): void {
        throw new Error("Function not implemented.");
      },
      refreshAsync: function (): Promise<Data> {
        throw new Error("Function not implemented.");
      },
      run: function (
        _params_0: { [key: string]: any; current: number; pageSize: number },
        ..._params_1: any[]
      ): void {
        throw new Error("Function not implemented.");
      },
      runAsync: function (
        _params_0: { [key: string]: any; current: number; pageSize: number },
        ..._params_1: any[]
      ): Promise<Data> {
        throw new Error("Function not implemented.");
      },
      mutate: function (
        _data?:
          | Data
          | ((oldData?: Data | undefined) => Data | undefined)
          | undefined
      ): void {
        throw new Error("Function not implemented.");
      },
    });

    const mockGetCharacters = jest.fn().mockResolvedValue({
      list: [
        { id: 1, name: "Rick" },
        { id: 2, name: "Morty" },
      ],
      total: 2,
    } as Data);

    mockedGetCharacters.mockReturnValue(mockGetCharacters);
  });

  test("renders CharactersView with correct props", async () => {
    render(<CharactersContainer />);

    await waitFor(() => {
      expect(screen.getByText("Rick")).toBeInTheDocument();
    });
  });

  test("handles page change correctly", async () => {
    render(<CharactersContainer />);
    const nextPageButton = screen.getByRole("listitem", { name: /next page/i });

    fireEvent.click(nextPageButton);

    await waitFor(() => {
      expect(
        mockedUsePagination(getCharacters()).pagination.onChange
      ).toHaveBeenCalledWith(2, 20);
    });
  });

  test("handles character selection correctly", async () => {
    const handleSelectedCharactersMock = jest.fn();

    render(
      <CharactersView
        sectionOne={[mockedCharacters[0]]}
        sectionTwo={[mockedCharacters[1]]}
        totalItems={100}
        currentPage={1}
        handleChangePage={jest.fn()}
        charactersSelected={{ characterOne: 2, characterTwo: 13 }}
        handleSelectedCharacters={handleSelectedCharactersMock}
      />
    );

    fireEvent.click(screen.getByText("Rick Sanchez"));

    expect(handleSelectedCharactersMock).toHaveBeenCalledWith(
      "characterOne",
      1
    );

    fireEvent.click(screen.getByText("Morty Smith"));

    expect(handleSelectedCharactersMock).toHaveBeenCalledWith(
      "characterTwo",
      2
    );
  });
});
