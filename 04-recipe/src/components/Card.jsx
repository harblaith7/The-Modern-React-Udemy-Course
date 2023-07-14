import { useNavigate } from "react-router-dom";

export default function Card({ recipe }) {
  const { image, name, tag, numberOfMinutes, id } = recipe;

  const navigate = useNavigate();

  const navigateToRecipePage = () => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="card" onClick={navigateToRecipePage}>
      <img src={image} alt="" />
      <div className="card-content">
        <h3>{name}</h3>
        <div className="card-info">
          <div className="tag">
            <p>{tag}</p>
          </div>
          <p className="time-text">{numberOfMinutes} mins</p>
        </div>
      </div>
    </div>
  );
}
