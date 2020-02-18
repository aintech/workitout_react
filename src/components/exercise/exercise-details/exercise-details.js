import React, {Component} from "react";

import './exercise-details.css'

export default class ExerciseDetails extends Component {

    state = {
        exercise: null,

        editMode: false,

        name: '',
        externalLink: '',
        index: '',
        instruction: '',
        timeout: '',
        type: '',
        weight: ''
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.exercise !== prevProps.exercise) {
            const { exercise } = this.props;
            this.setState({
                exercise
            })
        }
    }

    handleSubmit = (event) => {
        this.props.persistExercise({
            id: this.state.exercise.id,
            name: this.state.name,
            externalLink: this.state.externalLink,
            index: this.state.index,
            instruction: this.state.instruction,
            timeout: this.state.timeout,
            type: this.state.type,
            weight: this.state.weight
        });
        event.preventDefault();
        this.switchEditMode();
    };

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    switchEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    };

    render() {

        const { exercise,
                editMode,
                name,
                externalLink,
                index,
                instruction,
                timeout,
                type,
                weight
        } = this.state;

        if (exercise === null) {
            return <span>Waiting...</span>
        }

        if (editMode) {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" id="name" value={name} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                    <input type="button" value="Cancel" onClick={() => this.switchEditMode()} />
                </form>
            )
        }

        return (
            <div>
                <span>Details of exercise -> id: {exercise.id} | name: {exercise.name} | weight: {exercise.weight}</span>
                <input type="button" value="Edit" onClick={() => this.switchEditMode()} />
            </div>
        )
    }
}
