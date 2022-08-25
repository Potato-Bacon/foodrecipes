import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8c6f73b2&app_key=e6c45a5c0a0260c97c75738229f02eaf"
    )
      .then((response) => response.json())
      .then((data) => setResults(data));
  }, []);

  return (
    <>
      <h1>Home{results?.hits?.[0]?.recipe?.label}</h1>
    </>
  );
}

export default App;
