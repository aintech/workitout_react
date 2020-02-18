import React, {Component} from "react";
import "./header.css";

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <ul className="d-flex">
                    <li>
                        <a href="http://localhost:3000/">Workouts</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Exercises</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/">Calendar</a>
                    </li>
                </ul>
            </div>
        )
    }
}
