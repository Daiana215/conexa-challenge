"use client";

// vendors
import React, { useEffect, useState } from "react";
import { usePagination, useUpdateEffect } from "ahooks";

// view
import { CharactersView } from "./characters.view";

// service
import { getCharacters } from "../../services/character-service";

// types
import { Character } from "./types";
import { Skeleton } from "antd";

const PAGE_SIZE = 20;

export const CharactersContainer: React.FC = () => {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [visibleCharacters, setVisibleCharacters] = useState<
    Record<string, Character[]>
  >({
    sectionOne: [],
    sectionTwo: [],
    all: [],
  });

  const {
    data: characters,
    loading: charactersLoading,
    pagination: { current: currentPage, onChange },
    refresh,
  } = usePagination(getCharacters());

  useUpdateEffect(refresh, [currentPage]);

  useEffect(() => {
    if (!characters) return;

    const seenIds = [
      ...new Set(
        [...allCharacters, ...(characters?.list || [])].sort(
          (a, b) => a.id - b.id
        )
      ),
    ];

    const updatedVisibleCharacters = seenIds.slice(0, PAGE_SIZE);
    const sectionOne = updatedVisibleCharacters.slice(0, PAGE_SIZE / 2);
    const sectionTwo = updatedVisibleCharacters.slice(PAGE_SIZE / 2);
    setVisibleCharacters({
      all: updatedVisibleCharacters,
      sectionOne,
      sectionTwo,
    });

    setAllCharacters(seenIds.slice(PAGE_SIZE));
  }, [characters]);

  const onNextPage = (): void => {
    onChange(currentPage + 1, PAGE_SIZE);
  };

  const onPreviousPage = (): void => {
    onChange(currentPage - 1, PAGE_SIZE);
  };

  const handleChangePage = (pagination: number): void => {
    const nextNumber = Math.max(
      1,
      Math.min(pagination, characters?.total || 1)
    );
    if (nextNumber !== currentPage) {
      onChange(nextNumber, PAGE_SIZE);
    } else if (pagination > currentPage) {
      onNextPage();
    } else {
      onPreviousPage();
    }
  };

  return charactersLoading ? (
    <Skeleton active />
  ) : (
    <CharactersView
      currentPage={currentPage}
      totalItems={characters?.total || 0}
      handleChangePage={handleChangePage}
      sectionOne={visibleCharacters.sectionOne}
      sectionTwo={visibleCharacters.sectionTwo}
    />
  );
};

export default CharactersContainer;