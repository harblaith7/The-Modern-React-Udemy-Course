import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeHeader from "../components/RecipeHeader";
import useFetchRecipe from "../hooks/useFetchRecipe";
import Loading from "../components/Loading";
import RecipeInfo from "../components/RecipeInfo";
import Error from "../components/Error";
// import { recipes } from "../components/CardList";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;
  if (data?.errors) return <Error explanation="Recipe not found" />;

  console.log(data);
  return (
    <div>
      {data && (
        <>
          <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} />
          <RecipeInfo
            instructions={data.instructions}
            image={data.thumbnail_url}
            ingredients={data.sections[0].components}
          />
        </>
      )}
    </div>
  );
}
