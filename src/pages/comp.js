import React, { Component } from 'react';
import logo from "./logo.svg"
import {
Link
  } from "react-router-dom";

class Index extends Component {

    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
        </p>
                        <Link
                        to="/route"
                        >
                            Go to Route
        </Link>
                    </header>
                </div>
            </div>
        );
    }
}

export default Index;