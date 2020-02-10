import React, {Component} from "react";
import BackService from "../../services/back-service";

export default class ExerciseList extends Component {

    backService = new BackService();

    state = {
        exercises: null,
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

    render() {
        const { exercises, error } = this.state;

        if (error) {
            return <span>ERROR</span>
        }

        if (exercises === null) {
            return <span>Waiting...</span>
        }

        const items = exercises.map((exercise) => {
            const { id, type, name } = exercise;

            return (
                <li className="list-group-item" key={id}>
                    {id} {type} {name}
                </li>
            );
        });

        return (
            <ul className="exercise-list">
                {items}
            </ul>
        );
    }
}
