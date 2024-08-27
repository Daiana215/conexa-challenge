// vendors
import useSWR from "swr";

// service
import { getCharacterById } from "../../services/episodes-service";

export const useCharacterEpisodes = (characterId: string | null) => {
  const shouldFetch = characterId !== "undefined";

  return useSWR(
    shouldFetch ? [`character-${characterId}`, characterId] : null,
    () => getCharacterById(characterId!)
  );
};
