import HomePageHeader from "../components/HomePage/Header";
import HomePageImg from "../components/HomePage/Img";
import SearchWidget from "../components/HomePage/SearchWidget";

export default function HomePage() {
  return (
    <div className="py-10">
      <HomePageHeader />
      <HomePageImg />
      <SearchWidget />
    </div>
  );
}
