import React from 'react';
import Enjoy from './components/Enjoy'
import Mood from './components/Mood'
import TextReview from './components/TextReview'
import Recap from './components/Recap'
import Thanks from './components/Thanks'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const Root = () => {

  return (
    <Router>
      <Route exact path="/" component={Enjoy} />
      <Route exact path="/mood" component={Mood} />
      <Route exact path="/textReview" component={TextReview} />
      <Route exact path="/submit" component={Recap} />
      <Route exact path="/thanks" component={Thanks} />
    </Router>
  );

}

export default Root;
