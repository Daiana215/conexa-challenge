// vendors
import React from "react";

// antd
import { Flex, Skeleton } from "antd";

// styles
import styles from "./characters.module.css";

export const SkeletonCharacter: React.FC = () => {
  return (
    <Flex className={styles.charactersContainer}>
      <Skeleton.Input active style={{ width: "100%", height: "21rem" }} />
      <Skeleton.Input active style={{ width: "100%", height: "21rem" }} />
    </Flex>
  );
};

export default SkeletonCharacter;
