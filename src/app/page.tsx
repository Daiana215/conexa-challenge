"use client";
// vendors
import React, { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// antd
import { Flex, Spin } from "antd";
import { SkeletonCharacter } from "components/skeletons/characters";

// layout
import { MainLayout } from "components/layouts/main/main";
import { NextPage } from "next";
import { useLocalStorageState } from "ahooks";

const Characters = dynamic(
  () => import("partials/characters/characters.container"),
  {
    ssr: false,
    loading: () => <SkeletonCharacter />,
  }
);

const Home: NextPage = () => {
  const [hasLoaded, setHasLoaded] = useLocalStorageState("hasLoaded");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [setHasLoaded]);

  useEffect(() => {
    if (hasLoaded) {
      setIsLoading(true);
    } else {
      setHasLoaded(true);
    }
  }, [hasLoaded, setHasLoaded]);

  return isLoading ? (
    <Flex
      justify="center"
      align="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Spin size="large" />
    </Flex>
  ) : (
    <Suspense>
      <MainLayout content={<Characters />} />
    </Suspense>
  );
};

export default Home;
