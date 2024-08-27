// vendors
import React from "react";

// types
import { Character } from "partials/characters/types";

export const useFilteredEpisodes = (
  characterOneData: Character,
  characterTwoData: Character
): [string[], string[], string[]] => {
  return React.useMemo(() => {
    if (!characterOneData && !characterTwoData) return [[], [], []];

    const characterOneOnlyEpisodes: string[] = characterOneData
      ? [
          ...new Set(
            characterOneData.episode.map(
              (ep: string) => ep.split("/").at(-1) || ""
            )
          ),
        ]
      : [];
    const characterTwoOnlyEpisodes: string[] = characterTwoData
      ? [
          ...new Set(
            characterTwoData.episode.map(
              (ep: string) => ep.split("/").at(-1) || ""
            )
          ),
        ]
      : [];

    const commonEpisodes: string[] = [...characterOneOnlyEpisodes].filter(
      (id) => characterTwoOnlyEpisodes.includes(id)
    );

    return [characterOneOnlyEpisodes, characterTwoOnlyEpisodes, commonEpisodes];
  }, [characterOneData, characterTwoData]);
};
