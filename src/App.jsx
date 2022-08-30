import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FoodRecipeDetails from "./pages/FoodRecipeDetails";
import FoodRecipes from "./pages/FoodRecipes";
import Homepage from "./pages/Homepage";
import Nutrition from "./pages/Nutrition";
import RecipeFavourites from "./pages/RecipeFavourites";
import "./index.css";

function App() {
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/foodrecipes"
            element={
              <FoodRecipes
                favourites={favourites}
                setFavourites={setFavourites}
              />
            }
          />
          <Route
            path="/foodrecipes/:recipelabel"
            element={<FoodRecipeDetails />}
          />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route
            path="/recipefavourites"
            element={<RecipeFavourites favourites={favourites} />}
          />
          <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
