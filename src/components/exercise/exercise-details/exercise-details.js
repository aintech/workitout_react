import React, {Component} from "react";

import './exercise-details.css'

export default class ExerciseDetails extends Component {

    state = {
        exercise: null,

        editMode: false,

        name: '',
        externalLink: '',
        instruction: '',
        recovery: '',
        type: '',
        weight: ''
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.exercise !== prevProps.exercise) {
            const { exercise } = this.props;
            this.setState({
                exercise,
                name: exercise.name,
                externalLink: exercise.externalLink,
                instruction: exercise.instruction,
                recovery: exercise.recovery,
                type: exercise.type,
                weight: exercise.weight
            })

        }
    }

    handleSubmit = (event) => {
        this.props.persistExercise({
            id: this.state.exercise.id,
            name: this.state.name,
            externalLink: this.state.externalLink,
            instruction: this.state.instruction,
            recovery: this.state.recovery,
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

        const { editMode } = this.state;

        if (editMode) {

            const {
                name,
                externalLink,
                instruction,
                recovery,
                type,
                weight
            } = this.state;

            return (
                <div className="exercise-details">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" value={name} onChange={this.handleChange}/>
                        </div>
                        <input type="submit" value="Submit"/>
                        <input type="button" value="Cancel" onClick={() => this.switchEditMode()} />
                    </form>
                </div>
            )
        }

        const { exercise } = this.state;

        if (exercise === null) {
            return <span>Waiting...</span>
        }

        return (
            <div className="exercise-details">
                <div className="form-group">
                    <h2>{exercise.name} | {exercise.type}</h2>
                </div>
                {
                    exercise.externalLink
                        ?
                            <div className="form-group">
                                <h3>External link: <a href={exercise.externalLink}>{exercise.externalLink}</a></h3>
                            </div>
                        : ''
                }
                {
                    exercise.weight
                        ?
                            <div className="form-group">
                                <h3>Weight: {exercise.weight} grams</h3>
                            </div>
                        : ''
                }
                {
                    exercise.recovery
                        ?
                            <div className="form-group">
                                <h3>Recovery time: {exercise.recovery} secs</h3>
                            </div>
                        : ''
                }
                {
                    exercise.instruction
                        ?
                            <div className="form-group">
                                <h3>Instruction:</h3>
                                <h4>{exercise.instruction}</h4>
                            </div>
                        : ''
                }
                <div className="form-group">
                    <div className="btn-edit-exercise"
                         onClick={() => {this.switchEditMode()}}>
                        <span>Edit</span>
                    </div>
                </div>
            </div>
        )
    }
}
