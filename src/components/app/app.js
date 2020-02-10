import React, {Component} from 'react';
import './app.css';
import ExerciseList from "../exercise-list/exercise-list";
import ExerciseDetails from "../exercise-details/exercise-details";

export default class App extends Component {
  render() {
    return (
        <div className="App">
            <ExerciseList />
            <ExerciseDetails />
        </div>
    );
  }
}
