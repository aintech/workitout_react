import './app.css';
import React, {Component} from 'react';
import Header from "../header/header";
import ExercisePage from "../exercise/exercise-page/exercise-page";
import CalendarPage from "../calendar/calendar-page/calendar-page";
import WorkoutPage from "../workout/workout-page/workout-page";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Footer from "../footer/footer";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={CalendarPage} />
                        <Route path="/calendar" component={CalendarPage} />
                        <Route path="/workouts" component={WorkoutPage} />
                        <Route path="/exercises" component={ExercisePage} />
                    </Switch>
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}
