// vendors
import axios from "axios";

// types
import { Data, Params, Service } from "ahooks/lib/usePagination/types";

export const getCharacters: () => Service<Data, Params> =
  () =>
  async ({ current }) => {
    const url = `https://rickandmortyapi.com/api/character?page=${current}`;
    const response = await axios.get(url);

    return {
      list: response.data.results,
      total: response.data.info.count,
    };
  };
