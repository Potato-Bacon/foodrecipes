import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";

function FoodRecipes({ favourites, setFavourites }) {
  const [recipes, setRecipes] = useState([]);
  const caloriesPerServing = (totalCalories, servings) =>
    totalCalories / servings;

  const storeFavs = (event) => {
    const addFavourites = {
      recipeID: event.target.value,
      imageUrl: event.target.getAttribute("url"),
      recipeName: event.target.getAttribute("recipeName"),
      calories: event.target.getAttribute("calories"),
      servings: event.target.getAttribute("servings"),
    };
    const recipeNotInFavs =
      favourites.findIndex(
        (index) => index.recipeID === addFavourites.recipeID
      ) === -1;
    recipeNotInFavs ? setFavourites([...favourites, addFavourites]) : null;

    // favourites.recipeID.includes(event.target.value) !== undefined ||
    // favourites.recipeID.includes(event.target.value)
    //   ? null
    //   : setFavourites(() => [...favourites, o]);
    // console.log(favourites);
  };

  return (
    <>
      <Input setRecipes={setRecipes} />
      <h1>Food Recipes</h1>

      {recipes?.hits?.map((r) => (
        <>
          <Link to={`/foodrecipes/${r?.recipe?.uri.substring(51)}`}>
            <img src={r?.recipe?.image} key={r?.recipe?.label} />
          </Link>
          <h3>{r?.recipe?.label} </h3>
          <button
            recipeName={r?.recipe?.label}
            url={r?.recipe?.image}
            value={r?.recipe?.uri.substring(51)}
            calories={Math.round(
              caloriesPerServing(r?.recipe?.calories, r?.recipe?.yield)
            )}
            servings={r?.recipe?.yield}
            onClick={storeFavs}
          >
            &#x2764;&#xFE0F;
          </button>

          <p>
            {Math.round(
              caloriesPerServing(r?.recipe?.calories, r?.recipe?.yield)
            )}
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
