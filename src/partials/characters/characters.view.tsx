// vendors
import React from "react";

// antd
import { Flex, Avatar, Card, Divider } from "antd";

// components
import { CustomPagination as Pagination } from "components/pagination/index";

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
}) => {
  return (
    <>
      <div className={styles.container}>
        <Card>
          <Flex gap={24} className={styles.section}>
            <span>Characters #1</span>
            <div className={styles.characterContainer}>
              {sectionOne.map((character) => {
                return (
                  <Card key={character.id}>
                    <Flex align="center">
                      <div>
                        <Avatar
                          src={character.image}
                          size={"large"}
                          className={styles.avatar}
                        />
                      </div>
                      <Divider type="vertical" style={{ height: "4rem" }} />
                      <Flex gap={8} className={styles.section}>
                        <span>{character.name}</span>
                        <span>{character.status}</span>
                        <span>{character.species}</span>
                      </Flex>
                    </Flex>
                  </Card>
                );
              })}
            </div>
          </Flex>
        </Card>

        <Card>
          <Flex gap={24} className={styles.section}>
            <span>Characters #2</span>
            <div className={styles.characterContainer}>
              {sectionTwo.map((character) => {
                return (
                  <Card key={character.id}>
                    <Flex align="center">
                      <div>
                        <Avatar
                          src={character.image}
                          size={"large"}
                          className={styles.avatar}
                        />
                      </div>
                      <Divider type="vertical" style={{ height: "4rem" }} />
                      <Flex gap={8} className={styles.section}>
                        <span>{character.name}</span>
                        <span>{character.status}</span>
                        <span>{character.species}</span>
                      </Flex>
                    </Flex>
                  </Card>
                );
              })}
            </div>
          </Flex>
        </Card>
      </div>

      <Pagination
        totalItems={totalItems}
        currentPage={currentPage}
        handleChange={handleChangePage}
      />
    </>
  );
};

export default CharactersView;
