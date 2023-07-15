import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from "../components/RecipeHeader";
import useFetchRecipe from "../hooks/useFetchRecipe";
import Loading from "../components/Loading";
// import { recipes } from "../components/CardList";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  console.log({ data, loading, error });
  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {data && (
        <>
          <RecipeHeader nutritionalFacts={data.nutrition} />
        </>
      )}
    </div>
  );
}
