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
        this.addTolist = this.addTolist.bind(this);
    }

    addTolist(newElement) {
        let length = this.state.userList.length;
        newElement.id = length++;
        this.setState({ 
            userList: this.state.userList.concat([newElement])
        });
    }

    render () {
        return (
            <div className="content-area">
                <div className="form-area">
                    <FormContent list={this.state.userList} add={this.addTolist}/>
                </div>

                <div className="list-view">
                    <Listview list={this.state.userList}/>
                </div>
            </div>
        );
    }
}

export class FormContent extends React.Component {
    constructor(props) {
        super(props);
    }
    fetchNewUser() {
        let newUser= {};
        newUser.name = document.getElementById('name').value;
        newUser.email = document.getElementById('email').value;
        newUser.address = document.getElementById('address').value;
        newUser.age = document.getElementById('age').value;
        newUser.contact = document.getElementById('contact').value;

        return newUser;
    }
    emptyTextBoxes() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('address').value = '';
        document.getElementById('age').value = '';
        document.getElementById('contact').value = '';
    }
    addUserToList () {
        let newPerson = this.fetchNewUser();
        this.props.add(newPerson);
        this.emptyTextBoxes();
    }
    render () {
        return (
            <div className="sub-content-area" style={{display: 'inline-block', float: 'left', borderRight: '2px solid grey', padding: '30px 40px'}}>this is the form content
                <form>
                    <h1>Enter user details</h1>

                    <InputField fieldName="name" />
                    <InputField fieldName="email" />
                    <InputField fieldName="address" />
                    <InputField fieldName="age" />
                    <InputField fieldName="contact" />

                    <div style={{clear: 'both', margin: '0 auto', padding: '10px 0' }}>
                        <input type="button" value="add" onClick={this.addUserToList.bind(this)} style={{width: '200px'}}/>
                    </div>                        
                </form>
            </div>
        );
    }
}

export class Listview extends React.Component {
    constructor(props) {
        super(props);
        // this.delete = this.delete.bind(this);
        // this.edit = this.edit.bind(this);
    }
    edit () { }
    delete () {
        console.log('this is delete function');
    }
    render () {
        var listItems = this.props.list.map((item) => {
            return (
              <li key={item.id} style={{'width': '100%', textAlign: 'left', borderBottom: '1px solid black'}}>
                <a href="{item.name}">{item.name}</a> 
                <span onClick={this.delete.bind(this)} style={{cursor: 'pointer', float: 'right'}}> delete </span>
                <span onClick={this.edit.bind(this)} style={{cursor: 'pointer', float: 'right', paddingRight: '20px'}}> edit </span>
              </li>
            );
          });
      
        return (
            <div className="sub-content-area" style={{display: 'inline-block'}}>
            <h2>this is the List view content</h2>
                <ul>
                    {listItems}
                </ul>
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
                <input style={{float: 'right'}} type="text" id={this.props.fieldName} />
            </div>
        );
    }
}