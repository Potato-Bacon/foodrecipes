/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Img from "react-cool-img";

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

    recipeNotInFavs
      ? setFavourites([...favourites, addFavourites])
      : alert("Recipe has already been added to favourites.");
  };

  return (
    <>
      <Input setRecipes={setRecipes} />
      <div className="px-8 py-8 mx-auto max-w-screen-2xl">
        <h1 className="text-2xl font-semibold">Food Recipes</h1>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {/* mapping here */}
          {recipes?.hits?.map((r) => {
            return (
              <>
                <div className="relative block border border-gray-100 shadow-2xl ">
                  <button
                    recipeName={r?.recipe?.label}
                    url={r?.recipe?.image}
                    value={r?.recipe?.uri.substring(51)}
                    calories={Math.round(
                      caloriesPerServing(r?.recipe?.calories, r?.recipe?.yield)
                    )}
                    servings={r?.recipe?.yield}
                    onClick={storeFavs}
                    type="button"
                    name="favourites"
                    className="absolute p-2 text-white bg-black rounded-full right-4 top-4 "
                  >
                    {" "}
                    &#x2764;
                    {/* to come back to this later  */}
                    {/* <svg
                      className="w-8 h-8"
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
                    </svg> */}
                  </button>
                  <Link to={`/foodrecipes/${r?.recipe?.uri.substring(51)}`}>
                    <Img
                      className="w-full h-112 object-cover object-center group-hover:scale-110 transition duration-200"
                      src={r?.recipe?.image}
                      key={r?.recipe?.label}
                      loading="lazy"
                    />
                  </Link>

                  <div className="p-6">
                    <h5 className="mt-1 text-lg font-bold">
                      {r?.recipe?.label}
                    </h5>
                    <p className="text-sm font-medium text-gray-600">
                      {" "}
                      {Math.round(
                        caloriesPerServing(
                          r?.recipe?.calories,
                          r?.recipe?.yield
                        )
                      )}{" "}
                      kcal per serving
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {" "}
                      {r?.recipe?.yield} servings
                    </p>
                  </div>
                </div>
              </>
            );
          })}
          {/* mapping ends here */}
        </div>
      </div>
    </>
  );
}

export default FoodRecipes;
