import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { CharactersContainer } from "../characters.container";
import { usePagination } from "ahooks";
import { Data } from "ahooks/lib/usePagination/types";

jest.mock("../../../services/characters-service", () => ({
  getCharacters: jest.fn(),
}));

jest.mock("ahooks", () => ({
  usePagination: jest.fn(),
  useUpdateEffect: jest.fn((effect, deps) => React.useEffect(effect, deps)),
}));

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
          { id: 1, name: "Rick Sanchez" },
          { id: 2, name: "Morty Smith" },
          { id: 3, name: "Summer Smith" },
          { id: 4, name: "Beth Smith" },
          { id: 5, name: "Jerry Smith" },
        ],
        total: 100,
      },
      pagination: {
        current: 1,
        onChange: jest.fn(),
        pageSize: 0,
        total: 0,
        totalPage: 0,
        changeCurrent: function (_current: number): void {
          throw new Error("Function not implemented.");
        },
        changePageSize: function (_pageSize: number): void {
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
        { id: 1, name: "Rick Sanchez" },
        { id: 2, name: "Morty Smith" },
        { id: 3, name: "Summer Smith" },
        { id: 4, name: "Beth Smith" },
        { id: 5, name: "Jerry Smith" },
      ],
      total: 5,
    } as Data);

    mockGetCharacters.mockReturnValue(mockGetCharacters);
  });

  test("updates visible characters when characters data changes", async () => {
    mockedUsePagination.mockReturnValue({
      data: {
        list: [
          { id: 1, name: "Rick Sanchez" },
          { id: 2, name: "Morty Smith" },
        ],
        total: 2,
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
        changePageSize: function (_pageSize: number): void {
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

    render(<CharactersContainer />);

    await waitFor(() => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
      expect(screen.getByText("Morty Smith")).toBeInTheDocument();
      expect(screen.queryByText("Summer Smith")).not.toBeInTheDocument();
    });
  });

  test("updates visibleCharacters correctly when new characters are received", async () => {
    const { container } = render(<CharactersContainer />);

    await waitFor(() => {
      const characterContainers = container.querySelectorAll(
        ".characterContainer"
      );
      expect(characterContainers).toHaveLength(2);
    });

    expect(container.textContent).toContain("Rick Sanchez");
    expect(container.textContent).toContain("Morty Smith");
  });
});
