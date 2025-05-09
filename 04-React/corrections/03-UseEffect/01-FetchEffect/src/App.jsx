import "./App.css";
import { useState, useEffect } from "react";
import { fetchArticles } from "./utils/Network.js"; // Assuming you have a separate file for API calls
import Articles from "./components/Articles";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // const fetchArticles = async () => {
    //   try {
    //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //     if (!res.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     const data = await res.json();
    //     setArticles(data);
    //   } catch (err) {
    //     console.error("Error fetching articles:", err);
    //   }
    // };

    // fetchArticles();
    fetchArticles(setArticles);
  }, []);

  console.log(articles);

  return (
    <>
      <h1>List of Articles</h1>
      <Articles articles={articles} />
    </>
  );
}

export default App;
