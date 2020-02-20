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
                exercise
            })
            this.defaultState();
        }
    }

    handleSubmit = (event) => {
        console.log(this.state)
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
        this.defaultState();
        this.setState({
            editMode: !this.state.editMode
        })
    };

    defaultState = () => {
        const { exercise } = this.props;
        this.setState({
            name: exercise.name ? exercise.name : '',
            externalLink: exercise.externalLink ? exercise.externalLink : '',
            instruction: exercise.instruction ? exercise.instruction : '',
            recovery: exercise.recovery ? exercise.recovery : '',
            type: exercise.type ? exercise.type : '',
            weight: exercise.weight ? exercise.weight : ''
        })
    }

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
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" value={name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select className="form-control" id="type" value={type} onChange={this.handleChange}>
                                <option>Cardio</option>
                                <option>Hiit</option>
                                <option>Weight traning</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="externalLink">External link</label>
                            <input type="text" className="form-control" id="externalLink" value={externalLink} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input type="number" className="form-control" id="weight" value={weight} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="recovery">Recovery time</label>
                            <input type="time" className="form-control" id="recovery" value={recovery} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="instruction">Instruction</label>
                            <textarea rows="10" className="form-control" id="instruction" value={instruction} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group btn-holder">
                            <input className="btn-form submit" type="submit" value="Save"/>
                            <input className="btn-form cancel"
                                    type="button"
                                    onClick={() => {this.switchEditMode()}}
                                    value="Cancel"/>
                        </div>
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
                                <h3>Weight: {exercise.weight} Kg</h3>
                            </div>
                        : ''
                }
                {
                    exercise.recovery
                        ?
                            <div className="form-group">
                                <h3>Recovery time: {exercise.recovery}</h3>
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
                <div className="form-group btn-holder">
                    <input className="btn-form"
                            type="button"
                            onClick={() => {this.switchEditMode()}}
                            value="Edit"/>
                </div>
            </div>
        )
    }
}
