function Articles({ articles }) {
  return (
  <div>
    <h2>Articles</h2>
    <ul>
      {articles.map((article) => <li key={article.id}>{article.title}</li>)}
    </ul>
  </div>

  );
}

export default Articles;
