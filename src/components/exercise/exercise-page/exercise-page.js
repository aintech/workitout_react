import React, {Component} from "react";

import './exercise-page.css'
import ExerciseList from "../exercise-list/exercise-list";
import ExerciseDetails from "../exercise-details/exercise-details";
import BackService from "../../../services/back-service";

export default class ExercisePage extends Component {

    backService = new BackService();

    state = {
        exercises: null,
        selectedExercise: null,
        error: false
    };

    componentDidMount() {
        this.loadExercises();
    }

    loadExercises = () => {
        this.backService.getExercises().then(this.onExercisesLoaded).catch(this.onError);
    };

    onExercisesLoaded = (exercises) => {
        this.setState({
            exercises,
            error: false
        });
    };

    onError = (err) => {
        this.setState({
            error: true
        });
    };

    onExerciseSelected = (exercise) => {
        this.setState({
            selectedExercise: exercise
        });
    };

    onAddExercise = () => {
        this.setState({
            selectedExercise: {}
        });
    };

    persistExercise = (exercise) => {
        console.log(exercise)
    };

    render() {
        return (
            <div className="row mb2">
                <div className="col-md-2 right-bordered">
                    <ExerciseList
                        exercises={this.state.exercises}
                        onExerciseSelected={this.onExerciseSelected}
                        onAddExercise={this.onAddExercise}/>
                </div>
                <div className="col-md-2">
                    <ExerciseDetails
                        exercise={this.state.selectedExercise}
                        persistExercise={this.persistExercise}/>
                </div>
            </div>
        )
    }
}
