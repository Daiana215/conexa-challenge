export interface CharactersViewProps {
  totalItems: number;
  currentPage: number;
  sectionOne: Character[];
  sectionTwo: Character[];
  handleChangePage: (page: number) => void;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
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
  episode: string[];
  url: string;
  created: string;
}
