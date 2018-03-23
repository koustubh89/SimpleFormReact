import '../styles/components/headerBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';


export class Headerbar extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render () {
        return (
            <div className="header-container">
                <div className="heading">
                    <h1 className="header-text">Simple User List</h1>
                </div>
                <div className="links">
                    <a href="/about" style={{float:"right"}}>About</a>
                    <a href="/home" style={{float:"right"}}>Home</a>
                    <a href="/" style={{float:"right"}}>Content</a>
                </div>
            </div>
        );
    }
}