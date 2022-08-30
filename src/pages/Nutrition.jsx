function Nutrition() {
  const handleSubmit = () => {
    const data = {
      title: "string",
      ingr: ["string"],
      url: "string",
      summary: "string",
      yield: "string",
      time: "string",
      img: "string",
      prep: "string",
    };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      console.log("test");
    });
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
