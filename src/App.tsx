import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import NavBar from './NavBar';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlesListPage from "./pages/ArticlesListPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div id='page-body'>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/articles-list" component={ArticlesListPage} />
            <Route exact path="/article/:name" component={ArticlePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
