import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/recipefavourites">Favourites</Link>
      </nav>
    </>
  );
}

export default Navbar;
