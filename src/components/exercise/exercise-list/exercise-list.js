import React, {Component} from "react";

import './exercise-list.css'

export default class ExerciseList extends Component {

    state = {
        exercises: null
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.exercises !== this.props.exercises) {
            const { exercises } = this.props;
            this.setState({
                exercises
            });
            this.props.onExerciseSelected(exercises[0]);
        }
    }

    render() {
        const { exercises } = this.state;

        if (exercises === null) {
            return <span>Waiting...</span>
        }

        const items = exercises.map((exercise) => {
            const { id, name } = exercise;

            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onExerciseSelected(exercise)}>
                    {name}
                </li>
            );
        });

        return (
            <ul className="exercise-list list-group">
                {items}
                <li className="btn-add-exercise"
                    onClick={() => this.props.onAddExercise()}>
                    <span>+</span> Add Exercise
                </li>
            </ul>
        );
    }
}
