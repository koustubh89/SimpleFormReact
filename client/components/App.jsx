/*
    ./client/components/App.jsx
*/
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
    <div style={{textAlign: 'center'}}>
        <HeaderBar />
        <ContentArea />
    </div>);
  }
}

export class HeaderBar extends React.Component {
    render () {
        return (
            <h1>Simple User List</h1>
        );
    }
}

export class ContentArea extends React.Component {
    constructor() {
        super();
        this.state = ({userList: []});
        //this.addTolist = this.addTolist.bind(this);
    }

    addTolist() {
        console.log('add to list called');
    }

    render () {
        return (
            <div className="content-area">
                <div className="form-area">
                    <FormContent list={this.state.userList}/>
                </div>

                <div className="list-view">
                    <Listview list={this.state.userList} add={this.addTolist.bind(this)}/>
                </div>
            </div>
        );
    }
}

export class FormContent extends React.Component {
    constructor() {
        super();
    }
    addUserToList () {
        console.log('adding the user to list');
        this.props.add();
    }
    render () {
        return (
            <div className="sub-content-area" style={{float: 'left', borderRight: '2px solid grey', padding: '30px 40px'}}>this is the form content
                <form>
                    <h1>Enter user details</h1>

                    <InputField fieldName="name" />
                    <InputField fieldName="email" />
                    <InputField fieldName="address" />
                    <InputField fieldName="age" />
                    <InputField fieldName="contact number" />

                    <div style={{clear: 'both', margin: '0 auto', padding: '10px 0' }}>
                        <input type="button" value="add" onClick={this.addUserToList.bind(this)} style={{width: '200px'}}/>
                    </div>
                        
                </form>
            </div>
        );
    }
}

export class Listview extends React.Component {
    constructor() {
        super();
    }
    render () {
        return (
            <div className="sub-content-area">this is the List view content
                {this.props.list}
            </div>
        );
    }
} 

export class InputField extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className="input-field" style={{clear: 'both', padding: '10px 0'}}>
                <label style={{float: 'left'}}>Enter {this.props.fieldName} </label>
                <input style={{float: 'right'}} type="text" name="input-name"/>
            </div>
        );
    }
}