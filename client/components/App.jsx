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
        this.state = ({userList: [], currentUser: {}});
        this.addTolist = this.addTolist.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.editElem = this.editElem.bind(this);
        this.clearCurrentUser = this.clearCurrentUser.bind(this)
    }
    clearCurrentUser() {
        this.setState({currentUser: {}});
    }
    editElem(editElemWithId) {
        let newlist = this.state.userList;
        let index = undefined, user = undefined;     
        for(var i = 0; i < newlist.length; i += 1) {
            if(newlist[i]['id'] === editElemWithId) {
                index = i;
            } else {
                index = undefined;
            }
        }
        if (index > -1) {
            user = newlist[index];
        }
        //call the child function of form component from here
        console.log('executing edit from parent');
        //this.refs.child.bind(this, populateDetailsForEdit);
        this.setState({currentUser: user});
    }
    removeFromList(removeElemWithId){
        let newlist = this.state.userList;
        newlist = newlist.filter((elem) => {
            return elem.id !== removeElemWithId;
        });
        this.setState({userList: newlist});
    }

    addTolist(newElement) {
        let length = this.state.userList.length;
        newElement.id = length++;
        this.setState({ 
            userList: this.state.userList.concat([newElement])
        });
    }
    updateUser(updatedUser) {
        console.log('update user with', updatedUser);
        console.log('update user with', updatedUser);
        let newlist = this.state.userList;
        let index = undefined, user = undefined;     
        for(var i = 0; i < newlist.length; i += 1) {
            if(newlist[i]['id'] === updatedUser.id) {
                index = i;
            } else {
                index = undefined;
            }
        }
        if (index > -1) {
            newlist[index] = updatedUser;
            newlist[index]['id'] = this.state.currentUser.id;
        }
        //this.refs.child.bind(this, populateDetailsForEdit);
        this.setState({currentUser:  newlist[index]});
    }

    render () {
        return (
            <div className="content-area">
                <div className="form-area">
                    <FormContent list={this.state.userList} add={this.addTolist} update={this.updateUser} user={this.state.currentUser} clearUser={this.clearCurrentUser}/>
                </div>

                <div className="list-view">
                    <Listview list={this.state.userList} delete={this.removeFromList} edit={this.editElem}/>
                </div>
            </div>
        );
    }
}

export class FormContent extends React.Component {
    constructor(props) {
        super(props);
    }
    fetchUserDetails() {
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
        this.props.clearUser();
    }
    editUserFromList() {
        let editPerson = this.fetchUserDetails();
        this.props.add(editPerson);
        this.emptyTextBoxes();
    }
    updateUser() {
        let updatedPerson = this.fetchUserDetails();
        updatedPerson.id = this.props.user.id;    
        this.props.update(updatedPerson);
        this.emptyTextBoxes();
    }
    addUserToList () {
        let newPerson = this.fetchUserDetails();
        this.props.add(newPerson);
        this.emptyTextBoxes();
    }
    render () {
        return (
            <div className="sub-content-area" style={{display: 'inline-block', float: 'left', borderRight: '2px solid grey', padding: '30px 40px'}}>this is the form content
                <form>
                    <h1>Enter user details</h1>

                    <InputField fieldName="name" value={this.props.user && this.props.user.name}  />
                    <InputField fieldName="email" value={this.props.user && this.props.user.email}  />
                    <InputField fieldName="address" value={this.props.user && this.props.user.address}  />
                    <InputField fieldName="age" value={this.props.user && this.props.user.age}  />
                    <InputField fieldName="contact" value={this.props.user && this.props.user.contact}  />

                    <span>{this.props.user && this.props.user.id} </span>
                    <div style={{clear: 'both', margin: '0 auto', padding: '10px 0'}}>
                        <input type="button" value="save After edit" onClick={this.updateUser.bind(this)} style={{width: '100px'}}/>
                        <input type="button" value="add" onClick={this.addUserToList.bind(this)} style={{width: '100px'}}/>
                    </div>                        
                </form>
            </div>
        );
    }
}

export class Listview extends React.Component {
    constructor(props) {
        super(props);
    }
    edit (editElemWithId) { 
        console.log('this is edit function');
        this.props.edit(editElemWithId);              
    }
    delete (deleteElemWithId) {
        this.props.delete(deleteElemWithId);
    }
    render () {
        var listItems = this.props.list.map((item) => {
            return (
              <li key={item.id} style={{'width': '100%', textAlign: 'left', borderBottom: '1px solid black'}}>
                <a href="{item.name}">{item.name}</a> 
                <span onClick={this.delete.bind(this, item.id)} style={{cursor: 'pointer', float: 'right'}}> delete </span>
                <span onClick={this.edit.bind(this, item.id)} style={{cursor: 'pointer', float: 'right', paddingRight: '20px'}}> edit </span>
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
        this.handleChange = this.handleChange.bind(this);
        this.state = ({value: this.props.value});
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render () {
        return (
            <div className="input-field" style={{clear: 'both', padding: '10px 0'}}>
                <label style={{float: 'left'}}>Enter {this.props.fieldName} </label>
                <input style={{float: 'right'}} type="text" id={this.props.fieldName} value={this.props.value} onChange={this.handleChange} />
            </div>
        );
    }
}