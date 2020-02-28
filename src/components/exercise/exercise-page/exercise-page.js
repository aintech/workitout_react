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
            selectedExercise: this.convertToFront(exercise)
        });
    };

    onAddExercise = () => {
        this.setState({
            selectedExercise: {}
        });
    };

    persistExercise = (exercise) => {
        const converted = this.convertToBack(exercise);
        this.backService.persistExercise(converted);
    };

    convertToFront = (exercise) => {
        return {
            id: exercise.id,
            name: exercise.name,
            externalLink: exercise.externalLink,
            instruction: exercise.instruction,
            recovery: this.secondsToTime(exercise.recovery),
            type: this.typeConverter(exercise.type, true),
            weight: this.gramsToKilos(exercise.weight)
        }
    };

    convertToBack = (exercise) => {
        return {
            id: exercise.id,
            name: exercise.name,
            externalLink: exercise.externalLink,
            instruction: exercise.instruction,
            recovery: this.timeToSeconds(exercise.recovery),
            type: this.typeConverter(exercise.type, false),
            weight: this.kiloToGrams(exercise.weight)
        }
    };

    typeConverter = (type, toFront) => {
        if (type === null || type === undefined || type === '') {
            return toFront ? '' : null;
        }
        return toFront ? (type.charAt(0) + type.slice(1).toLowerCase()) : type.toUpperCase();
    };

    secondsToTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds - (minutes * 60);
        return (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (secs < 10 ? ('0' + secs) : secs);
    };

    timeToSeconds = (time) => {
        if (time === null || time === undefined) {
            return null;
        }
        const minsSecs = time.split(':');
        return minsSecs[0] * 60 + parseInt(minsSecs[1], 10);
    };

    gramsToKilos = (grams) => {
        return grams / 1000;
    };

    kiloToGrams = (kilo) => {
        return kilo * 1000;
    };

    render() {
        return (
            <div className="row mb2 widthed">
                <div className="col-md-2 right-bordered">
                    <ExerciseList
                        exercises={this.state.exercises}
                        onExerciseSelected={this.onExerciseSelected}
                        onAddExercise={this.onAddExercise}/>
                </div>
                <div className="col-md-6">
                    <ExerciseDetails
                        exercise={this.state.selectedExercise}
                        persistExercise={this.persistExercise}/>
                </div>
            </div>
        )
    }
}
