import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacterById = async (id: string | null) => {
  if (!id) {
    throw new Error("Character ID is required");
  }

  const response = await axios.get(`${BASE_URL}/character/${id}`);
  return response.data;
};

export const getEpisodesByIds = async (ids: string[] | null) => {
  if (!ids || ids.length === 0) {
    throw new Error("Episode IDs are required");
  }

  const response = await axios.get(`${BASE_URL}/episode/${ids.join(",")}`);
  return response.data;
};
