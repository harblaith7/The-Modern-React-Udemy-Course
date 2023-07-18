import { Outlet } from "react-router-dom";

export default function RecipeInfo({ instructions, image, ingredients }) {
  return (
    <div className="recipe-info">
      <Outlet context={{ instructions, ingredients }} />
      <img className="recipe-img" src={image} alt="" />
    </div>
  );
}
