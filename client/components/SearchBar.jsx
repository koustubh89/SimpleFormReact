import React from 'react';
import {InputField} from './InputField.jsx';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.searchUser = this.searchUser.bind(this);
    }
    searchUser(searchstring) {
        console.log('this is search function in search bar', searchstring);
        this.props.search(searchstring);
    }
    render () {
        let inputType = undefined;
        return (
            <div className="search-div" style={{clear: 'both', padding: '10px 0', float: 'right'}}>
                <InputField fieldName="search" searchFunction={this.searchUser} />
            </div>
        );
    }
}