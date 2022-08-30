import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
        {Math.round(
          caloriesPerServing(recipeDetail?.recipe?.calories, servings)
        )}{" "}
      </p>
      <p name="fat">
        Fat{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.FAT?.quantity,
            servings
          )
        )}{" "}
        g
      </p>
      <p name="Saturated Fat">
        Saturated Fat{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.FASAT?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Monosaturated Fat">
        Monosaturated Fat{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.FAMS?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Polyunsaturated Fat">
        {" "}
        Polyunsaturated Fat{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.FAPU?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Carbs">
        Carbs{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.CHOCDF?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Fiber">
        Fiber{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.FIBTG?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Sugars">
        Sugars{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.SUGAR?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Protein">
        Protein{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.PROCNT?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Cholesterol">
        Cholesterol{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.CHOLE?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Sodium">
        Sodium{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.NA?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Calcium">
        Calcium{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.CA?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Magnesium">
        Magnesium{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.MG?.quantity,
            servings
          )
        )}
        g
      </p>
      <p name="Potassium">
        Potassium{" "}
        {Math.round(
          caloriesPerServing(
            recipeDetail?.recipe?.totalNutrients?.K?.quantity,
            servings
          )
        )}
        g
      </p>
      <br />
      <a href={recipeDetail?.recipe?.url} target="blank">
        Preparation
      </a>
    </>
  );
}

export default FoodRecipeDetails;
