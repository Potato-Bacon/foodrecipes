/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import React from "react";
import NutritionLabel from "../components/NutritionLabel";

function FoodRecipeDetails() {
  const { recipelabel } = useParams();
  const [recipeDetail, setRecipeDetail] = useState();

  useEffect(() => {
    const url = `https://api.edamam.com/api/recipes/v2/recipe_${recipelabel}?type=public&app_id=8c6f73b2&app_key=e6c45a5c0a0260c97c75738229f02eaf`;
    console.log(url, "recipe details");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipeDetail(data));
  }, []);

  return (
    <>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols gap-8">
            <div className="grid gap-4">
              <div className="lg:col-span-4 rounded-lg overflow-hidden relative -right-80">
                <img
                  src={recipeDetail?.recipe?.image}
                  loading="lazy"
                  alt="recipe"
                />
              </div>
              <div className="flex">
                <NutritionLabel
                  className="absolute"
                  recipeDetail={recipeDetail}
                />
              </div>
              <div className="md:py-8">
                <div className="mb-2 md:mb-3">
                  <span className="inline-block text-gray-500 mb-0.5">
                    Food Recipes
                  </span>
                  <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                    {recipeDetail?.recipe.label}
                  </h2>
                </div>

                <div className="flex items-center text-gray-500 gap-2 mb-6">
                  <span className="text-sm">serves 4 servings</span>
                </div>

                <div className="flex gap-2.5">
                  <a
                    href={recipeDetail?.recipe?.url}
                    target="blank"
                    className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >
                    Preparation
                  </a>
                </div>
              </div>
              <div className="grid lg:grid-cols-4 gap-4">
                <div className="justify-center lg:col-span-4 relative">
                  <h3 className="text-xl font-bold pb-3"> Ingredients List </h3>
                  <ul className=" text-lg list-disc">
                    {recipeDetail?.recipe?.ingredientLines?.map((r) => (
                      <li className="list-none">{r}</li>
                    ))}
                  </ul>
                  <h1 className="text-xl font-bold pt-5">Diet Labels</h1>
                  <ul>
                    {recipeDetail?.recipe?.dietLabels?.map((r) => (
                      <li className="text-lg">{r}</li>
                    ))}
                  </ul>
                  <h1 className="text-xl font-bold pt-3">Health Labels</h1>
                  <ul>
                    {recipeDetail?.recipe?.healthLabels?.map((r) => (
                      <li className="text-lg">{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodRecipeDetails;
