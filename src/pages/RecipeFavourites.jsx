import React from "react";
import { Link } from "react-router-dom";

function RecipeFavourites({ favourites }) {
  return (
    <>
      <div className="px-8 py-8 mx-auto max-w-screen-2xl">
        <h1 className="text-2xl font-semibold">Favourite Recipes</h1>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {/* <div>RecipeFavourites</div> */}

          {/* map starts */}
          {favourites.map((r) => {
            return (
              <>
                {" "}
                <div className="relative block border border-gray-100 shadow-2xl ">
                  <Link to={`/foodrecipes/${r?.recipeID}`}>
                    <img
                      className="w-full h-112 object-cover object-center group-hover:scale-110 transition duration-200"
                      src={r?.imageUrl}
                    />
                  </Link>
                  <div className="p-6">
                    <h5 className="mt-1 text-lg font-bold">{r?.recipeName} </h5>
                    <p className="text-sm font-medium text-gray-600">
                      {r?.calories} kcal per serving
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {r?.servings} servings
                    </p>
                  </div>
                </div>
              </>
            );
          })}

          {/* map ends */}
        </div>
      </div>
    </>
  );
}

export default RecipeFavourites;
