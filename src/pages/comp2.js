import React, { Component } from 'react';
import logo from "./logo.svg"
import {
    Link
} from "react-router-dom";

class Comp extends Component {

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Second Route
        </p>
                        <Link
                            to="/"
                        >
                            Go to Index
        </Link>
                    </header>
                </div>
            </div>
        );
    }
}

export default Comp;