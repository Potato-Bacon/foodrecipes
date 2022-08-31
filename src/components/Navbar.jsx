import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </Link>
        {"  "}
        {"  "}
        <Link to="/foodrecipes" className="btn btn-ghost normal-case text-xl">
          Food Recipes
        </Link>
        <Link
          to="/recipefavourites"
          className="btn btn-ghost normal-case text-xl"
        >
          Recipe Favourites
        </Link>
        <Link to="/nutrition" className="btn btn-ghost normal-case text-xl">
          Nutrition
        </Link>
        {"  "}
        {"  "}
      </nav>
    </>
  );
}

export default Navbar;
