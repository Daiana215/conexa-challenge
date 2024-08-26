// layout
import MainLayout from "./layout";

// components
import { CharacterPage } from "./page/characters";

export default function Home() {
  return (
    <MainLayout>
      <CharacterPage />
    </MainLayout>
  );
}
