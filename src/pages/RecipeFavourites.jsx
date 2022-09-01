import React from "react";
import { Link } from "react-router-dom";

function RecipeFavourites({ favourites, setFavourites }) {
  const handleRemove = (string) => {
    console.log(favourites.indexOf(string));
    const newList = favourites.splice((favourites.indexOf(string), 1));
    setFavourites(newList);
  };

  return (
    <>
      <div className="px-8 py-8 mx-auto max-w-screen-2xl">
        <h1 className="text-2xl font-semibold">Favourite Recipes</h1>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {/* <div>RecipeFavourites</div> */}

          {/* map starts */}
          {favourites.map((item) => {
            return (
              <>
                {" "}
                <div className="relative block border border-gray-100 shadow-2xl ">
                  <Link to={`/foodrecipes/${item?.recipeID}`}>
                    <img
                      className="w-full h-112 object-cover object-center group-hover:scale-110 transition duration-200"
                      src={item?.imageUrl}
                    />
                  </Link>
                  <div className="p-6">
                    <h5 className="mt-1 text-lg font-bold">
                      {item?.recipeName}{" "}
                    </h5>
                    <p className="text-sm font-medium text-gray-600">
                      {item?.calories} kcal per serving
                    </p>
                    <p className="text-sm font-medium text-gray-600">
                      {item?.servings} servings
                    </p>
                    <button
                      onClick={() => handleRemove(item?.recipeID)}
                      className=""
                    >
                      Remove
                    </button>
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
