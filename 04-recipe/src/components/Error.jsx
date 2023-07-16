import { Link } from "react-router-dom";
import emptyPlate from "../assets/no-food-found.png";

export default function Error({ message, explanation }) {
  return (
    <div className="not-found-container">
      <img src={emptyPlate} className="not-found-image" alt="" />
      <h1 className="not-founded-header">{message ? message : "Oh no!"}</h1>
      <p>{explanation ? explanation : "Something wen't wrong"}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
}
