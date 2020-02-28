import "./header.css";
import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <nav className="header navbar navbar-expand-sm navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar nav mr-auto">
                        <li className="nav-item nav-link menu">
                            <Link className="nav-link" to="/calendar">Calendar</Link>
                        </li>
                        <li className="nav-item nav-link menu">
                            <Link className="nav-link" to="/workouts">Workouts</Link>
                        </li>
                        <li className="nav-item nav-link menu">
                            <Link className="nav-link" to="/exercises">Exercises</Link>
                        </li>
                    </ul>
                    <span className="form-inline my-2 my-lg-0">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">login</button>
                    </span>
                </div>
            </nav>
        )
    }
}
