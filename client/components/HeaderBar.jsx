import '../styles/components/headerBar.scss';
import React from 'react';
import { Link } from 'react-router-dom';


export class Headerbar extends React.Component {
    render () {
        return (
            <div className="header-container">
                <div className="heading">
                    <h1 className="header-text">Simple User List</h1>
                </div>
                <div className="links">
                    <a href="/about" style={{float:"right"}}>About</a>
                    <a href="/" style={{float:"right"}}>Home</a>
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link> */}
                </div>
            </div>
        );
    }
}