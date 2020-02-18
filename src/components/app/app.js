import React, {Component} from 'react';

import './app.css';
import Header from "../header/header";
import ExercisePage from "../exercise/exercise-page/exercise-page";

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <ExercisePage />
        </div>
    );
  }
}
