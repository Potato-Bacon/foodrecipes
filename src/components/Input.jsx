import { useState } from "react";
import { useNavigate } from "react-router";

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

  const [url, setURL] = useState(
    "https://api.edamam.com/api/recipes/v2?type=public&q=&app_id=8c6f73b2&app_key=e6c45a5c0a0260c97c75738229f02eaf"
  );
  const navigate = useNavigate();

  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = () => {
    setURL(url.replace("&q=", `&q=${input}`));
    // dietState.balanced
    //   ? setURL(url + "&diet=balanced")
    //   : setURL(url.replace("&diet=balanced", ""));
    // dietState.highfiber
    //   ? setURL(url + "&diet=high-fiber")
    //   : setURL(url.replace("&diet=high-fiber", ""));
    // dietState.highprotein
    //   ? setURL(url + "&diet=high-protein")
    //   : setURL(url.replace("&diet=high-protein", ""));
    // dietState.lowcarb
    //   ? setURL(url + "&diet=low-carb")
    //   : setURL(url.replace("&diet=low-carb", ""));
    // dietState.lowfat
    //   ? setURL(url + "&diet=low-fat")
    //   : setURL(url.replace("&diet=low-fat", ""));
    // dietState.lowsodium
    //   ? setURL(url + "&diet=low-sodium")
    //   : setURL(url.replace("&diet=low-sodium", ""));
    // allergyState.crustceanfree
    //   ? setURL(url + "&health=crustacean-free")
    //   : setURL(url.replace("&health=crustacean-free", ""));
    // allergyState.dairyfree
    //   ? setURL(url + "&health=dairy-free")
    //   : setURL(url.replace("&health=dairy-free", ""));
    // allergyState.eggfree
    //   ? setURL(url + "&health=egg-free")
    //   : setURL(url.replace("&health=egg-free", ""));
    // allergyState.glutenfree
    //   ? setURL(url + "&health=gluten-free")
    //   : setURL(url.replace("&health=gluten-free", ""));
    // allergyState.nutsfree
    //   ? setURL(url + "&health=peanut-free&health=tree-nut-free")
    //   : setURL(url.replace("&health=peanut-free&health=tree-nut-free", ""));
    // allergyState.shellfishfree
    //   ? setURL(url + "&health=shellfish-free")
    //   : setURL(url.replace("&health=shellfish-free", ""));
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
    navigate("/foodrecipes");
  };

  //   useEffect(() => {
  //     fetch(
  //       "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8c6f73b2&app_key=e6c45a5c0a0260c97c75738229f02eaf"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => setResults(data));
  //   }, []);

  const handleBalanced = (event) => {
    const o = { ...dietState, balanced: event.target.checked };
    setDietState(o);

    o.balanced
      ? setURL(url + "&diet=balanced")
      : setURL(url.replace("&diet=balanced", ""));
  };

  const handleHighFiber = (event) => {
    const o = { ...dietState, highfiber: event.target.checked };
    setDietState(o);
    o.highfiber
      ? setURL(url + "&diet=high-fiber")
      : setURL(url.replace("&diet=high-fiber", ""));
  };
  const handleHighProtein = (event) => {
    const o = { ...dietState, highprotein: event.target.checked };
    setDietState(o);
    o.highprotein
      ? setURL(url + "&diet=high-protein")
      : setURL(url.replace("&diet=high-protein", ""));
  };

  const handleLowCarb = (event) => {
    const o = { ...dietState, lowcarb: event.target.checked };
    setDietState(o);
    o.lowcarb
      ? setURL(url + "&diet=low-carb")
      : setURL(url.replace("&diet=low-carb", ""));
  };

  const handleLowFat = (event) => {
    const o = { ...dietState, lowfat: event.target.checked };
    setDietState(o);
    o.lowfat
      ? setURL(url + "&diet=low-fat")
      : setURL(url.replace("&diet=low-fat", ""));
  };

  const handleLowSodium = (event) => {
    const o = { ...dietState, lowsodium: event.target.checked };
    setDietState(o);
    o.lowsodium
      ? setURL(url + "&diet=low-sodium")
      : setURL(url.replace("&diet=low-sodium", ""));
  };
  const handleCrustcean = (event) => {
    const o = { ...allergyState, crustceanfree: event.target.checked };
    setAllergyState(o);
    o.crustceanfree
      ? setURL(url + "&health=crustacean-free")
      : setURL(url.replace("&health=crustacean-free", ""));
  };

  const handleDairy = (event) => {
    const o = { ...allergyState, dairyfree: event.target.checked };
    setAllergyState(o);
    o.dairyfree
      ? setURL(url + "&health=dairy-free")
      : setURL(url.replace("&health=dairy-free", ""));
  };
  const handleEgg = (event) => {
    const o = { ...allergyState, eggfree: event.target.checked };
    setAllergyState(o);
    o.eggfree
      ? setURL(url + "&health=egg-free")
      : setURL(url.replace("&health=egg-free", ""));
  };
  const handleGluten = (event) => {
    const o = { ...allergyState, glutenfree: event.target.checked };
    setAllergyState(o);
    o.glutenfree
      ? setURL(url + "&health=gluten-free")
      : setURL(url.replace("&health=gluten-free", ""));
  };

  const handleNuts = (event) => {
    const o = { ...allergyState, nutsfree: event.target.checked };
    setAllergyState(o);
    o.nutsfree
      ? setURL(url + "&health=peanut-free&health=tree-nut-free")
      : setURL(url.replace("&health=peanut-free&health=tree-nut-free", ""));
  };

  const handleShellFish = (event) => {
    const o = { ...allergyState, shellfishfree: event.target.checked };
    setAllergyState(o);
    o.shellfishfree
      ? setURL(url + "&health=shellfish-free")
      : setURL(url.replace("&health=shellfish-free", ""));
  };

  return (
    <>
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
