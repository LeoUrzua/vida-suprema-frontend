import React from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
const ArticlesList = ({ articles }) => (
    <div>
    {articles.map((article: { name: any; title: React.ReactNode; content: { substring: (arg0: number, arg1: number) => React.ReactNode; }[]; }, key: string | number | undefined) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
            <h3>{article.title}</h3>
            <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
    ))}
    </div>
);

export default ArticlesList;