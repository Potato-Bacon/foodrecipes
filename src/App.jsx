import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=8c6f73b2&app_key=e6c45a5c0a0260c97c75738229f02eaf"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>App</h1>
    </>
  );
}

export default App;
