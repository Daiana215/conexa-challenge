// layout
import MainLayout from "./layout";

// components
import { CharactersContainer as Characters } from "partials/characters/characters.container";

export default function Home() {
  return (
    <MainLayout>
      <Characters />
    </MainLayout>
  );
}
