import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Videos from './components/Videos/Videos';

ReactDOM.render(
  <BrowserRouter>
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/videos' component={Videos} />
    </Switch>
  </App>
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
