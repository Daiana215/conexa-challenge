// vendors
import React from "react";

// components
import { EpisodeCard } from "./components/episode-card";

// types
import { EpisodesViewProps } from "./types";

// styles
import styles from "./episodes.module.css";

export const EpisodesView: React.FC<EpisodesViewProps> = ({
  bothCharacters,
  bothCharactersLoading,
  onlyCharacterOne,
  onlyCharacterOneLoading,
  onlyCharacterTwo,
  onlyCharacterTwoLoading,
  charactersSelected,
}) => {
  return (
    <div className={styles.episodesContainer}>
      <EpisodeCard
        key={"characterOne"}
        title="Character #1 - Episodes"
        emptyText="Select a character #1"
        episodes={onlyCharacterOne || []}
        isLoading={onlyCharacterOneLoading}
        characterSelected={!!charactersSelected?.characterOne}
      />
      <EpisodeCard
        key={"characterOneAndTwo"}
        title="Character #1 & Character #2 - Common Episodes"
        emptyText="Select a character #1 & #2"
        episodes={bothCharacters || []}
        isLoading={bothCharactersLoading}
        characterSelected={Object.keys(charactersSelected).length >= 2}
      />
      <EpisodeCard
        key={"characterTwo"}
        title="Character #2"
        emptyText="Select a character #2 - Episodes"
        episodes={onlyCharacterTwo || []}
        isLoading={onlyCharacterTwoLoading}
        characterSelected={!!charactersSelected?.characterTwo}
      />
    </div>
  );
};

export default EpisodesView;
