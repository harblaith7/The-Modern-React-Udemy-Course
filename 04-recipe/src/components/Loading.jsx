import loadingGif from "../assets/loading.gif";

export default function Loading() {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="" />
    </div>
  );
}
