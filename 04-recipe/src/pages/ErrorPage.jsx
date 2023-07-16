import Error from "../components/Error";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <div className="error-page">
      <Error message={error.statusText} explanation={error.data} />
    </div>
  );
}
