// vendors
import React from "react";

// antd
import { Skeleton } from "antd";

export const SkeletonEpisode: React.FC = () => {
  return <Skeleton.Input active style={{ width: "100%", height: "21rem" }} />;
};

export default SkeletonEpisode;
