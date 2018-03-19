import React from 'react';

export class About extends React.Component {
    constructor() {
        super();
        console.log('about component');
    }
    render(){
        return (<h1>About page</h1>);
    }
}