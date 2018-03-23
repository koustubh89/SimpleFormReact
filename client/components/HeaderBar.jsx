import '../styles/components/headerBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';


export class Headerbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="header-container">
                <div className="heading">
                    <h1 className="header-text">Simple User List</h1>
                </div>
                <div className="links">
                    <a href="/about" className="header-links" >About</a>
                    <a href="/home" className="header-links" >Home</a>
                    <a href="/" className="header-links" >Content</a>
                </div>
            </div>
        );
    }
}