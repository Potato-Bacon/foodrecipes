import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Input from "./components/Input";
import Navbar from "./components/Navbar";
import FoodRecipeDetails from "./pages/RecipeDetails";
import FoodRecipes from "./pages/FoodRecipes";
import Homepage from "./pages/Homepage";
import Nutrition from "./pages/Nutrition";
import RecipeFavourites from "./pages/RecipeFavourites";

function App() {
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route index element={<Input setRecipes={setRecipes} />} /> */}
          <Route path="/foodrecipes" element={<FoodRecipes />} />
          <Route
            path="/foodrecipes:recipe"
            element={<FoodRecipeDetails recipes={recipes} />}
          />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/recipefavourites" element={<RecipeFavourites />} />
          <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
