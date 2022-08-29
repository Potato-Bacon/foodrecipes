import { useState } from "react";
import { Outlet } from "react-router";

function Input({ setRecipes }) {
  const [input, setInput] = useState();
  const [dietState, setDietState] = useState({
    balanced: false,
    highfiber: false,
    highprotein: false,
    lowcarb: false,
    lowfat: false,
    lowsodium: false,
  });

  const [allergyState, setAllergyState] = useState({
    glutenfree: false,
    nutsfree: false,
    dairyfree: false,
    shellfishfree: false,
    eggfree: false,
    crustceanfree: false,
  });

  const [filterUrl, setFilterUrl] = useState("");

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = () => {
    let url = `https://api.edamam.com/api/recipes/v2?type=public&q=${input}&app_id=8c6f73b2&app_key=e6c45a5c0a0260c97c75738229f02eaf`;
    url = url + filterUrl;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  };

  const handleBalanced = (event) => {
    const o = { ...dietState, balanced: event.target.checked };
    setDietState(o);

    o.balanced
      ? setFilterUrl(filterUrl + "&diet=balanced")
      : setFilterUrl(filterUrl.replace("&diet=balanced", ""));
  };

  const handleHighFiber = (event) => {
    const o = { ...dietState, highfiber: event.target.checked };
    setDietState(o);
    o.highfiber
      ? setFilterUrl(filterUrl + "&diet=high-fiber")
      : setFilterUrl(filterUrl.replace("&diet=high-fiber", ""));
  };
  const handleHighProtein = (event) => {
    const o = { ...dietState, highprotein: event.target.checked };
    setDietState(o);
    o.highprotein
      ? setFilterUrl(filterUrl + "&diet=high-protein")
      : setFilterUrl(filterUrl.replace("&diet=high-protein", ""));
  };

  const handleLowCarb = (event) => {
    const o = { ...dietState, lowcarb: event.target.checked };
    setDietState(o);
    o.lowcarb
      ? setFilterUrl(filterUrl + "&diet=low-carb")
      : setFilterUrl(filterUrl.replace("&diet=low-carb", ""));
  };

  const handleLowFat = (event) => {
    const o = { ...dietState, lowfat: event.target.checked };
    setDietState(o);
    o.lowfat
      ? setFilterUrl(filterUrl + "&diet=low-fat")
      : setFilterUrl(filterUrl.replace("&diet=low-fat", ""));
  };

  const handleLowSodium = (event) => {
    const o = { ...dietState, lowsodium: event.target.checked };
    setDietState(o);
    o.lowsodium
      ? setFilterUrl(filterUrl + "&diet=low-sodium")
      : setFilterUrl(filterUrl.replace("&diet=low-sodium", ""));
  };
  const handleCrustcean = (event) => {
    const o = { ...allergyState, crustceanfree: event.target.checked };
    setAllergyState(o);
    o.crustceanfree
      ? setFilterUrl(filterUrl + "&health=crustacean-free")
      : setFilterUrl(filterUrl.replace("&health=crustacean-free", ""));
  };

  const handleDairy = (event) => {
    const o = { ...allergyState, dairyfree: event.target.checked };
    setAllergyState(o);
    o.dairyfree
      ? setFilterUrl(filterUrl + "&health=dairy-free")
      : setFilterUrl(filterUrl.replace("&health=dairy-free", ""));
  };
  const handleEgg = (event) => {
    const o = { ...allergyState, eggfree: event.target.checked };
    setAllergyState(o);
    o.eggfree
      ? setFilterUrl(filterUrl + "&health=egg-free")
      : setFilterUrl(filterUrl.replace("&health=egg-free", ""));
  };
  const handleGluten = (event) => {
    const o = { ...allergyState, glutenfree: event.target.checked };
    setAllergyState(o);
    o.glutenfree
      ? setFilterUrl(filterUrl + "&health=gluten-free")
      : setFilterUrl(filterUrl.replace("&health=gluten-free", ""));
  };

  const handleNuts = (event) => {
    const o = { ...allergyState, nutsfree: event.target.checked };
    setAllergyState(o);
    o.nutsfree
      ? setFilterUrl(filterUrl + "&health=peanut-free&health=tree-nut-free")
      : setFilterUrl(
          filterUrl.replace("&health=peanut-free&health=tree-nut-free", "")
        );
  };

  const handleShellFish = (event) => {
    const o = { ...allergyState, shellfishfree: event.target.checked };
    setAllergyState(o);
    o.shellfishfree
      ? setFilterUrl(filterUrl + "&health=shellfish-free")
      : setFilterUrl(filterUrl.replace("&health=shellfish-free", ""));
  };

  return (
    <>
      <Outlet />
      <input
        onChange={handleInput}
        name="title"
        placeholder="Search for Recipes"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        Diet
        <input onChange={handleBalanced} type="checkbox" name="Balanced" />{" "}
        <label>Balanced</label>
        <input
          onChange={handleHighFiber}
          type="checkbox"
          name="High-Fiber"
        />{" "}
        <label>High-Fiber</label>
        <input
          onChange={handleHighProtein}
          type="checkbox"
          name="High-Protein"
        />
        <label>High-Protein</label>
        <input onChange={handleLowCarb} type="checkbox" name="Low-Carb" />{" "}
        <label>Low-Carb</label>
        <input onChange={handleLowFat} type="checkbox" name="Low-Fat" />{" "}
        <label>Low-Fat</label>
        <input
          onChange={handleLowSodium}
          type="checkbox"
          name="Low-Sodium"
        />{" "}
        <label>Low-Sodium</label>
      </div>
      <div>
        {" "}
        Allergies
        <input onChange={handleCrustcean} type="checkbox" name="Crustcean" />
        <label>Crustcean</label>
        <input onChange={handleDairy} type="checkbox" name="Dairy" />{" "}
        <label>Dairy</label>
        <input onChange={handleEgg} type="checkbox" name="Egg" />{" "}
        <label>Egg</label>
        <input onChange={handleGluten} type="checkbox" name="Gluten" />{" "}
        <label>Gluten</label>
        <input onChange={handleNuts} type="checkbox" name="Nuts" />{" "}
        <label>Nuts</label>
        <input
          onChange={handleShellFish}
          type="checkbox"
          name="Shellfish"
        />{" "}
        <label>Shellfish</label>
      </div>
    </>
  );
}

export default Input;
