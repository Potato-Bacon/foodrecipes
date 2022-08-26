function FoodRecipes({ recipes }) {
  return (
    <>
      {/* <img src={recipes?.hits?.[0]?.recipe?.image} />
      {console.log(recipes)} */}
      {recipes?.hits?.map((r) => (
        <>
          <img src={r?.recipe?.image} />
          <p>{r?.recipe?.label}</p>
        </>
      ))}
    </>
  );
}

export default FoodRecipes;
