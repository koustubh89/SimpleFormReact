import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
    constructor() {
        super();
        console.log('about component');
    }
    render(){
        return (
            <div className="content">
                <h1>About page</h1>
                {/* <a href="/">Go back to home</a> */}
                <Link to="/">Go back to content page</Link>
            </div>
        );
    }
}