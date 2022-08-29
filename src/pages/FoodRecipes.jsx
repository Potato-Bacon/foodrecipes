import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function FoodRecipes() {
  const [recipes, setRecipes] = useState([]);
  const perServing = (a, b) => a / b;
  console.log(recipes);

  return (
    <>
      <Input setRecipes={setRecipes} />
      <h1>Food Recipes</h1>

      {recipes?.hits?.map((r) => (
        <>
          <Link to={`/foodrecipes/${r?.recipe?.uri.substring(51)}`}>
            <img src={r?.recipe?.image} key={r?.recipe?.label} />
          </Link>
          <p>{r?.recipe?.label} </p>

          <p>
            {Math.round(perServing(r?.recipe?.calories, r?.recipe?.yield))}
            kcal per serving
          </p>
          <p>{r?.recipe?.yield} servings</p>
          <p></p>
        </>
      ))}
    </>
  );
}

export default FoodRecipes;
