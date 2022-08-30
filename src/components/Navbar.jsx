import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/nutrition">Nutrition</Link>
        {"  "}
        <Link to="/foodrecipes">Food Recipes</Link>
        {"  "}
        <Link to="/recipefavourites">Recipe Favourites</Link>
        {"  "}
      </nav>
    </>
  );
}

export default Navbar;
