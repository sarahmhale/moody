import React from 'react';

//Version 1
import Enjoy from './components/version1/Enjoy'
import Mood from './components/version1/Mood'
import TextReview from './components/version1/TextReview'
import Recap from './components/version1/Recap'

//Version 2
import Enjoy2 from './components/version2/Enjoy'
import Mood2 from './components/version2/Mood'
import TextReview2 from './components/version2/TextReview'
import Recap2 from './components/version2/Recap'


import Start from './components/Start'
import Thanks from './components/Thanks'
import './App.css';

import {
  VERSION1_STAR,
  VERSION1_REVIEW,
  VERSION1_SUBMIT,
  VERSION1_MOOD,
  VERSION2_STAR,
  VERSION2_REVIEW,
  VERSION2_SUBMIT,
  VERSION2_MOOD
} from './shared/routes'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const Root = () => {

  return (
    <Router>
      <Route exact path="/" component={Start} />

      <Route exact path={VERSION1_STAR} component={Enjoy} />
      <Route exact path={VERSION1_MOOD} component={Mood} />
      <Route exact path={VERSION1_REVIEW} component={TextReview} />
      <Route exact path={VERSION1_SUBMIT} component={Recap} />

      <Route exact path={VERSION2_STAR} component={Enjoy2} />
      <Route exact path={VERSION2_MOOD} component={Mood2} />
      <Route exact path={VERSION2_REVIEW} component={TextReview2} />
      <Route exact path={VERSION2_SUBMIT} component={Recap2} />

      <Route exact path="/thanks" component={Thanks} />
    </Router>
  );

}

export default Root;
