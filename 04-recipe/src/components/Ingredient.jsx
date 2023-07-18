import { Link, useOutletContext, useParams } from "react-router-dom";

export default function Ingredients() {
  const { id } = useParams();
  const { ingredients } = useOutletContext();

  return (
    <div className="recipe-info-container">
      <div className="recipe-info-header">
        <h3>INGREDIENTS</h3>
        <Link to={`/recipe/${id}/instructions`} className="recipe-info-link">
          Instructions
        </Link>
      </div>
      {ingredients.map(({ raw_text, position }) => (
        <div className="recipe-info-content-container" key={position}>
          <p className="recipe-step">{position}</p>
          <p className="recipe-text">{raw_text}</p>
        </div>
      ))}
    </div>
  );
}
