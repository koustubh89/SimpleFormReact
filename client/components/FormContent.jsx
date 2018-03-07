import React from 'react';
import {InputField} from './InputField.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {DialogExampleSimple} from './modal.jsx';


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
        let buttonMarkup = undefined;
        if (this.props.user.id) {
            buttonMarkup = <input type="button" className="form-actions" value="update" onClick={this.updateUser.bind(this)} />
        } else {
            buttonMarkup = <input type="button" className="form-actions" value="add" onClick={this.addUserToList.bind(this)} />;
        }
        return (
            <div className="sub-content-area" style={{display: 'inline-block', float: 'left', borderRight: '2px solid grey', padding: '30px 40px'}}>
                <form>
                    <h1>Enter user details</h1>

                    <InputField fieldName="name" value={this.props.user && this.props.user.name}  />
                    <InputField fieldName="email" value={this.props.user && this.props.user.email}  />
                    <InputField fieldName="address" value={this.props.user && this.props.user.address}  />
                    <InputField fieldName="age" value={this.props.user && this.props.user.age}  />
                    <InputField fieldName="contact" value={this.props.user && this.props.user.contact}  />

                    <div className="button-container" style={{clear: 'both', margin: '0 auto', padding: '20px 0'}}>
                        {buttonMarkup}
                    </div>
                    <MuiThemeProvider >
                        <DialogExampleSimple />                   
                    </MuiThemeProvider >
                </form>
            </div>
        );
    }
}