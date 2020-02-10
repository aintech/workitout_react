import React, {Component} from "react";
import BackService from "../../services/back-service";

export default class ExerciseDetails extends Component {

    backService = new BackService();

    state = {
        exercise: null,
        error: false
    };

    componentDidMount() {
        this.loadExercise(1);
    }

    loadExercise = (id) => {
        this.backService.getExercise(id).then(this.onExerciseLoaded).catch(this.onError);
    };

    onExerciseLoaded = (exercise) => {
        this.setState({
            exercise,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true
        })
    };

    render() {

        const { exercise, error } = this.state;

        if (error) {
            return <span>ERROR</span>
        }

        if (exercise === null) {
            return <span>Waiting...</span>
        }

        const { id, name, weight } = exercise;

        return (
            <span>Details of exercise -> id: {id} | name: {name} | weight: {weight}</span>
        )
    }
}
