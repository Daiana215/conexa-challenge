// vendors
import React from "react";

// antd
import { Card, Empty } from "antd";

// components
import { TableEpisodes } from "../episode-table";
import { SkeletonEpisode as Skeleton } from "components/skeletons/episode";

// types
import { Episode } from "../../types";

// styles
import styles from "../../episodes.module.css";

interface EpisodeCardProps {
  title: string;
  emptyText?: string;
  episodes: Episode[];
  isLoading?: boolean;
  characterSelected: boolean;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({
  title,
  episodes,
  isLoading,
  emptyText,
  characterSelected,
}) => {
  return isLoading ? (
    <Skeleton />
  ) : (
    <Card className={styles.card} title={title}>
      {!characterSelected ? (
        <Empty description={emptyText} />
      ) : (
        <TableEpisodes dataSource={episodes} />
      )}
    </Card>
  );
};

export default EpisodeCard;
