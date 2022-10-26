import React, { useState } from "react";
import NutritionLabel from "../components/NutritionLabel";

function Nutrition() {
  const [nutrition, setNutrition] = useState("");

  const handleInput = (event) => {
    setNutrition(event.target.value.split("\n"));
  };

  const handleSubmit = () => {
    console.log(nutrition);
    const info = {
      title: "",
      ingr: nutrition,
      url: "",
      summary: "",
      yield: "",
      time: "",
      img: "",
      prep: "",
    };
    console.log(info, "test");
    fetch(
      "https://api.edamam.com/api/nutrition-details?app_id=3cf07818&app_key=670f073fc4e15144a0b6d392e8b62a8d",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div>Nutrition</div>
      <NutritionLabel/>
      <textarea
        onChange={handleInput}
        rows="20"
        cols="50"
        placeholder="Insert recipe details"
        type="nutrition"
      ></textarea>
      <button onClick={handleSubmit}>Analyze</button>
    </>
  );
}

export default Nutrition;
