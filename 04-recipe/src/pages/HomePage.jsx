import CardList from "../components/CardList";
import Header from "../components/Header";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {
  const [recipes] = useFetchRecipes();

  return (
    <>
      <Header />
      <CardList recipes={recipes} />
    </>
  );
}
