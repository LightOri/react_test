import React, { Component } from 'react';
import { BrowserRouter as MainRouter, Route, Link } from 'react-router-dom';
import './App.less';

import { MainNavBar } from './containers/MainNavBar';
import { LoginPage } from './pages/Login';
import { MainPage } from './pages/Main';
import { CatalogPage } from './pages/Catalog';

export default class App extends Component {

  render() {
    return (
      <MainRouter>
        <div className="App">
        <MainNavBar/>
          <div>Pinned HEADER!</div>
          <ul className="inline-menu">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/login">Login Page (test)</Link>
          </ul>

          test: {this.props.title}
          <hr/>
          <Route exact path='/' component={MainPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/catalog' component={CatalogPage} />
        </div>
      </MainRouter>
    );
  }
}
