import Card from "./Card";

// export const recipes = [
//   {
//     id: 1,
//     name: "Poke Bowls",
//     image:
//       "https://therecipecritic.com/wp-content/uploads/2022/01/hawaiianpokebowls.jpg",
//     tag: "Romantic Dinner",
//     numberOfMinutes: 50,
//   },
//   {
//     id: 2,
//     name: "Chocolate Banana Cake",
//     image:
//       "https://bakerbynature.com/wp-content/uploads/2021/02/Chocolate-Banana-Cake-with-Espresso-Fudge-Frosting-1-of-1.jpg",
//     tag: "Sweet Tooth",
//     numberOfMinutes: 150,
//   },
//   {
//     id: 3,
//     name: "Shawarma",
//     image:
//       "https://www.aheadofthyme.com/wp-content/uploads/2021/07/chicken-shawarma-3.jpg",
//     tag: "Chicken",
//     numberOfMinutes: 50,
//   },
//   {
//     id: 4,
//     name: "Kanafeh",
//     image:
//       "https://i.pinimg.com/originals/1c/49/f1/1c49f13151a7b25cb1fd8bab1ddb105d.jpg",
//     tag: "Romantic Dinner",
//     numberOfMinutes: 30,
//   },
// ];

export default function CardList({ recipes }) {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
