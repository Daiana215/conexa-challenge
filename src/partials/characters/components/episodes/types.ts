export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface EpisodesContainerProps {
  charactersSelected: Record<string, number>;
}

export interface EpisodesViewProps extends EpisodesContainerProps {
  bothCharactersLoading?: boolean;
  onlyCharacterOneLoading?: boolean;
  onlyCharacterTwoLoading?: boolean;
  bothCharacters?: Episode[];
  onlyCharacterOne?: Episode[];
  onlyCharacterTwo?: Episode[];
}

export interface TableProps {
  dataSource: Episode[];
}
