"use client";

// vendors
import React from "react";

// view
import { EpisodesView } from "./episodes.view";

// hooks
import { useCharacterEpisodes } from "src/hooks/use-character-episodes";

// types
import { EpisodesContainerProps } from "./types";
import { useFilteredEpisodes } from "src/hooks/use-filtered-episodes";
import { useEpisodesData } from "src/hooks/use-episodes-data";

export const EpisodesContainer: React.FC<EpisodesContainerProps> = ({
  charactersSelected,
}) => {
  const { data: characterOneData } = useCharacterEpisodes(
    `${charactersSelected?.characterOne}`
  );
  const { data: characterTwoData } = useCharacterEpisodes(
    `${charactersSelected?.characterTwo}`
  );

  const [characterOneEpisodes, characterTwoEpisodes, commonEpisodes] =
    useFilteredEpisodes(characterOneData, characterTwoData);

  const { data: characterOneEpisodesData, isLoading: onlyCharacterOneLoading } =
    useEpisodesData(characterOneEpisodes);
  const { data: characterTwoEpisodesData, isLoading: onlyCharacterTwoLoading } =
    useEpisodesData(characterTwoEpisodes);
  const { data: commonEpisodesData, isLoading: bothCharactersLoading } =
    useEpisodesData(commonEpisodes);

  return (
    <EpisodesView
      bothCharacters={commonEpisodesData}
      charactersSelected={charactersSelected}
      onlyCharacterOne={characterOneEpisodesData}
      onlyCharacterTwo={characterTwoEpisodesData}
      bothCharactersLoading={bothCharactersLoading}
      onlyCharacterTwoLoading={onlyCharacterTwoLoading}
      onlyCharacterOneLoading={onlyCharacterOneLoading}
    />
  );
};

export default EpisodesContainer;
