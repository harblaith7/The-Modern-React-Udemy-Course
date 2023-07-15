import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
// import { recipes } from "../components/CardList";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  console.log({ data, loading, error });

  // const recipe = recipes.find((r) => r.id === parseInt(id));
  return <div>{/* <h1>{recipe.name}</h1> */}</div>;
}
