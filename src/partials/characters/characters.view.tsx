// vendors
import React from "react";

// antd
import { Flex } from "antd";

// components
import { EpisodesContainer as Episodes } from "./components/episodes/episodes.container";
import { CustomPagination as Pagination } from "components/pagination/index";
import { CharacterSection } from "./components/character-section";

// types
import { CharactersViewProps } from "./types";

// styles
import styles from "./characters.module.css";

export const CharactersView: React.FC<CharactersViewProps> = ({
  sectionOne,
  sectionTwo,
  totalItems,
  currentPage,
  handleChangePage,
  charactersSelected,
  handleSelectedCharacters,
}) => {
  return (
    <>
      <Flex className={styles.container}>
        <div className={styles.containerSection}>
          <CharacterSection
            key={"sectionOne"}
            title="Characters #1"
            characters={sectionOne}
            onSelectCharacter={(id) =>
              handleSelectedCharacters("characterOne", id)
            }
          />
          <CharacterSection
            key={"sectionTwo"}
            title="Characters #2"
            characters={sectionTwo}
            onSelectCharacter={(id) =>
              handleSelectedCharacters("characterTwo", id)
            }
          />
        </div>

        <Pagination
          totalItems={totalItems}
          currentPage={currentPage}
          handleChange={handleChangePage}
        />
      </Flex>

      <Episodes charactersSelected={charactersSelected} />
    </>
  );
};

export default CharactersView;
