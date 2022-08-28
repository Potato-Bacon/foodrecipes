import { useState } from "react";
import Input from "../components/Input";

function FoodRecipes() {
  const [recipes, setRecipes] = useState([]);
  const perServing = (a, b) => a / b;

  return (
    <>
      <Input setRecipes={setRecipes} />
      <h1>Food Recipes</h1>

      {console.log(recipes)}

      {recipes?.hits?.map((r) => (
        <>
          <img src={r?.recipe?.image} key={r?.recipe?.label} />
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
