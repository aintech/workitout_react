import React, {Component} from "react";
import "./header.css";

export default class Header extends Component {
    render() {
        return (
            <nav className="header navbar navbar-expand-sm navbar-light bg-light">
                <div className="collapse navbar-collapse">
                    <ul className="navbar nav mr-auto">
                        <li className="nav-item nav-link menu"
                            onClick={() => this.props.onChosePage('/calendar')}>
                            Calendar
                        </li>
                        <li className="nav-item nav-link menu"
                            onClick={() => this.props.onChosePage('/workout')}>
                            Workouts
                        </li>
                        <li className="nav-item nav-link menu"
                            onClick={() => this.props.onChosePage('/exercise')}>
                            Exercises
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
