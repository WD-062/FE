const fetchArticles = async (setState) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    setState(data);
  } catch (err) {
    console.error("Error fetching articles:", err);
  }
};

export { fetchArticles };
