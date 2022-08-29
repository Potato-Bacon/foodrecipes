import { useEffect, useState } from "react";
import { useParams } from "react-router";

function FoodRecipeDetails() {
  const { recipelabel } = useParams();
  const [recipeDetail, setRecipeDetail] = useState();
  const perServing = (a, b) => a / b;

  useEffect(() => {
    const url = `https://api.edamam.com/api/recipes/v2/recipe_${recipelabel}?type=public&app_id=8c6f73b2&app_key=e6c45a5c0a0260c97c75738229f02eaf`;
    console.log(url, "recipe details");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipeDetail(data));
  }, []);

  const servings = recipeDetail?.recipe?.yield;

  return (
    <>
      <h1>Food Recipe Details</h1>
      <p>{recipeDetail?.recipe.label}</p>
      <img src={recipeDetail?.recipe?.image} /> <br />
      <h3>Ingredients List </h3>
      <ul>
        {recipeDetail?.recipe?.ingredientLines?.map((r) => (
          <li>{r}</li>
        ))}
      </ul>
      <h3>Diet Labels</h3>
      <ul>
        {recipeDetail?.recipe?.dietLabels?.map((r) => (
          <li>{r}</li>
        ))}
      </ul>
      <h3>Health Labels</h3>
      <ul>
        {recipeDetail?.recipe?.healthLabels?.map((r) => (
          <li>{r}</li>
        ))}
      </ul>
      <h3>Nutrition Value</h3>
      <p name="calories">
        calories{" "}
        {Math.round(perServing(recipeDetail?.recipe?.calories, servings))}{" "}
      </p>
      <p name="fat">
        Fat{" "}
        {Math.round(
          perServing(
            recipeDetail?.recipe?.totalNutrients?.FAT?.quantity,
            servings
          )
        )}{" "}
        g
      </p>
      <p name="Saturated Fat">
        Saturated Fat{" "}
        {Math.round(
          perServing(
            recipeDetail?.recipe?.totalNutrients?.FASAT?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Monosaturated Fat">
        Monosaturated Fat{" "}
        {Math.round(
          perServing(
            recipeDetail?.recipe?.totalNutrients?.FAMS?.quantity,
            servings
          )
        )}
      </p>
      <p name="Polyunsaturated Fat">
        {" "}
        Polyunsaturated Fat{" "}
        {Math.round(
          perServing(
            recipeDetail?.recipe?.totalNutrients?.FAPU?.quantity,
            servings
          )
        )}
      </p>
      <p name="Carbs">
        Carbs{" "}
        {Math.round(
          perServing(
            recipeDetail?.recipe?.totalNutrients?.CHOCDF?.quantity,
            servings
          )
        )}{" "}
      </p>
      <p name=""></p>
      <br />
      <a href={recipeDetail?.recipe?.url} target="blank">
        Preparation
      </a>
    </>
  );
}

export default FoodRecipeDetails;
