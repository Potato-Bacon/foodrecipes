import { Outlet } from "react-router";

function Homepage() {
  return (
    <>
      <Outlet />
      {/* <Input setRecipes={setRecipes} />
      <FoodRecipes recipes={recipes} />
      <FoodRecipeDetails recipes={recipes} /> */}
    </>
  );
}

export default Homepage;
