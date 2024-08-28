// vendors
import React from "react";

// antd
import { Flex, Card } from "antd";

// components
import { CharacterCard } from "../character-card";

// types
import { Character } from "../../types";

// styles
import styles from "../../characters.module.css";

interface CharacterSectionProps {
  title: string;
  characters: Character[];
  onSelectCharacter: (id: number) => void;
}

export const CharacterSection: React.FC<CharacterSectionProps> = ({
  title,
  characters,
  onSelectCharacter,
}) => {
  return (
    <Card className={styles.cardChar} title={title} key={title}>
      <Flex gap={24} className={styles.section}>
        <div className={styles.characterContainer} data-testid="character">
          {characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onSelect={onSelectCharacter}
            />
          ))}
        </div>
      </Flex>
    </Card>
  );
};

export default CharacterSection;
