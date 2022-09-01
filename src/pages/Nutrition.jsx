import React from "react";

function Nutrition() {
  // const [nutrition, setNutrition] = useState();

  // const handleInput = (event) => {
  //   setNutrition(event.target.value);
  // };

  const handleSubmit = () => {
    const info = {
      title: "",
      ingr: ["1 cup of rice"],
      url: "",
      summary: "",
      yield: "",
      time: "",
      img: "",
      prep: "",
    };
    fetch(
      "https://api.edamam.com/api/nutrition-details?app_id=3cf07818&app_key=670f073fc4e15144a0b6d392e8b62a8d",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(info),
      }
    ).then((response) => console.log(response));
  };

  return (
    <>
      <div>Nutrition</div>
      <textarea
        rows="20"
        cols="50"
        placeholder="Insert recipe details"
        type="nutrition"
      ></textarea>
      <button onSubmit={handleSubmit}>Analyze</button>
    </>
  );
}

export default Nutrition;
