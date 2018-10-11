/* eslint-env node */
import React, { Component } from 'react';
import logo from './logo.svg';
import './AppHello.css';

class AppHello extends Component {
    render() {
        return (
        <div className = "AppHello">
            <div className = "AppHello-header-section">
                <header className="AppHello-header">
                    <img src={logo} className="AppHello-logo" alt="logo"></img>
                    <title className="AppHello-title">Simple Hello app</title>
                </header>
            </div>
            <div className = "AppHello-body-section">
                <body className="AppHello-body">
                    <h1> Hello World </h1>
                </body>
            </div>
        </div>
        );
    }  
};

export default AppHello;