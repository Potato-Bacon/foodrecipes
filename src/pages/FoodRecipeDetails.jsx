import { useEffect, useState } from "react";
import { useParams } from "react-router";
import React from "react";
import NutritionLabel from "../components/NutritionLabel";

function FoodRecipeDetails() {
  const { recipelabel } = useParams();
  const [recipeDetail, setRecipeDetail] = useState();
  const caloriesPerServing = (totalCalories, servings) =>
    totalCalories / servings;

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
      <h1 className="text-2xl font-semibold">Food Recipe Details</h1>
      <img src={recipeDetail?.recipe?.image} /> <br />
      <h5 className="mt-1 text-2xl font-bold">{recipeDetail?.recipe.label}</h5>
      <a href={recipeDetail?.recipe?.url} target="blank">
        Preparation
      </a>
      <h3 className="text-xl"> Ingredients List </h3>
      <ul className="list-disc list-inside text-lg">
        {recipeDetail?.recipe?.ingredientLines?.map((r) => (
          <li>{r}</li>
        ))}
      </ul>
      <b className="text-xl">Diet Labels</b>
      <ul>
        {recipeDetail?.recipe?.dietLabels?.map((r) => (
          <li className="text-lg">{r}</li>
        ))}
      </ul>
      <b className="text-xl">Health Labels</b>
      <ul>
        {recipeDetail?.recipe?.healthLabels?.map((r) => (
          <li className="text-lg">{r}</li>
        ))}
      </ul>
      {/* nutritional label */}
      <NutritionLabel recipeDetail={recipeDetail} />
    </>
  );
}

export default FoodRecipeDetails;
