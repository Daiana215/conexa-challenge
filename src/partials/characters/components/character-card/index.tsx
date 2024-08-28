// vendors
import React from "react";

// antd
import { Avatar, Card, Divider, Flex } from "antd";

// types
import { Character } from "../../types";

// styles
import styles from "../../characters.module.css";

interface CharacterCardProps {
  character: Character;
  onSelect: (id: number) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  onSelect,
}) => {
  return (
    <Card onClick={() => onSelect(character.id)} className={styles.card}>
      <Flex align="center" style={{ flexDirection: "column" }}>
        <div data-testid="cardChar">
          <Avatar src={character.image} size={"large"} />
        </div>
        <Divider type="horizontal" className={styles.divider} />
        <Flex gap={8} className={styles.section}>
          <span>{character.name}</span>
          <span>{character.status}</span>
          <span>{character.species}</span>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CharacterCard;
