export interface CharactersViewProps {
  totalItems: number;
  currentPage: number;
  sectionOne: Character[];
  sectionTwo: Character[];
  handleChangePage: (page: number) => void;
  charactersSelected: Record<string, number>;
  handleSelectedCharacters: (key: string, value: number) => void;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  episode: string[];
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: string;
}
