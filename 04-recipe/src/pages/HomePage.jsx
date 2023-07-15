import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";

export default function HomePage() {
  const [data, loading] = useFetchRecipes();

  return (
    <>
      <Header />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
    </>
  );
}
