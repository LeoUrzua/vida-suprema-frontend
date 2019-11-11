import React from 'react';
import ArticlesList from "../components/ArticlesList";
import articleContent from "../data/article-content";

const ArticlesListPage = () => (
  <div>
    <header>
      ArticlesListPage
      <ArticlesList articles={articleContent} />
    </header>
  </div>
);

export default ArticlesListPage;