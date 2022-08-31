import React from "react";
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
  };

  return (
    <>
      <Input setRecipes={setRecipes} />
      <div className="px-4 py-8 mx-auto max-w-screen-xl">
        <div className="relative max-w-3xl mx-auto text-center">
          {/* <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2"></span> */}
          <h1>Food Recipes</h1>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
            {/* mapping here */}
            {recipes?.hits?.map((r) => {
              return (
                <>
                  <a
                    href="/product/build-your-own-drone"
                    className="relative block border border-gray-100"
                  >
                    <button
                      type="button"
                      name="wishlist"
                      className="absolute p-2 text-white bg-black rounded-full right-4 top-4"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                    </button>

                    <img
                      loading="lazy"
                      alt="Build Your Own Drone"
                      className="object-contain w-full h-56"
                      src={r?.recipe?.image}
                      key={r?.recipe?.label}
                    />

                    <div className="p-6">
                      <p className="text-sm font-medium text-gray-600">
                        $14.99
                      </p>
                      <h5 className="mt-1 text-lg font-bold">
                        Build Your Own Drone
                      </h5>
                    </div>
                  </a>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodRecipes;
