import React, {Component} from 'react';

import './app.css';
import Header from "../header/header";
import ExercisePage from "../exercise/exercise-page/exercise-page";
import CalendarPage from "../calendar/calendar-page/calendar-page";
import WorkoutPage from "../workout/workout-page/workout-page";

export default class App extends Component {

    state = {
        page: ''
    };

    onChosePage = (page) => {
        if (page !== this.state.page) {
            this.setState({
                page
            })
        }
        console.log(page)
    };

    render() {

        const { page } = this.state;

        let elementToShow = <CalendarPage />;

        if (page === 'workouts') {
            elementToShow = <WorkoutPage />
        } else if (page === 'exercises') {
            elementToShow = <ExercisePage />
        }

        return (
            <div className="App">
                <Header onChosePage={this.onChosePage}/>
                {elementToShow}
            </div>
        );
    }
}
