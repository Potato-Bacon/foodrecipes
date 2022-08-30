import { Link } from "react-router-dom";

function RecipeFavourites({ favourites }) {
  return (
    <>
      <div>RecipeFavourites</div>
      {favourites.map((r) => (
        <>
          <Link to={`/foodrecipes/${r?.recipeID}`}>
            <img src={r?.imageUrl} />
          </Link>
          <h3>{r?.recipeName}</h3>
          <p>{r?.calories} kcal per serving</p>
          <p>{r?.servings} servings</p>
        </>
      ))}
    </>
  );
}

export default RecipeFavourites;
