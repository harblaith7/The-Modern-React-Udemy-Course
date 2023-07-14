import CardList from "../components/CardList";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <div className="App">
      <main className="main_container">
        <Header />
        <CardList />
      </main>
    </div>
  );
}
