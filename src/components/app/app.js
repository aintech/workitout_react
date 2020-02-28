import './app.css';
import React, {Component} from 'react';
import Header from "../header/header";
import ExercisePage from "../exercise/exercise-page/exercise-page";
import CalendarPage from "../calendar/calendar-page/calendar-page";
import WorkoutPage from "../workout/workout-page/workout-page";
import {BrowserRouter, Route, Switch} from "react-router-dom";

export default class App extends Component {

    state = {
        page: ''
    };

    onChosePage = (page) => {
        // if (page !== this.state.page) {
        //     this.setState({
        //         page
        //     })
        // }
        // console.log(page)
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
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={CalendarPage} />
                        <Route path="/calendar" component={CalendarPage} />
                        <Route path="/workout" component={WorkoutPage} />
                        <Route path="/exercise" component={ExercisePage} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
