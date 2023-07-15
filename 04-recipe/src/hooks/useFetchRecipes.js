import axios from "axios";
import { useEffect, useState } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "20",
  },
  headers: {
    "X-RapidAPI-Key": "30b594a022mshc657030b09147dcp153ad1jsn8b9a863a5527",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    setLoading(true);
    setRecipes(null);
    setError(null);
    try {
      const response = await axios.request(options);
      setRecipes(response.data.results);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return [recipes, loading, error];
};

export default useFetchRecipes;
