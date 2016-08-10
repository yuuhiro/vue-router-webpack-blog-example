export const getCurrentArticle = (state)  => {
  return state.articles.find((article) => article.id === state.currentArticleID);
};