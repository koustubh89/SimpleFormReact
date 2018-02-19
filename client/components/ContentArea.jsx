import React from 'react';
import {FormContent} from './FormContent.jsx';
import {Listview} from './Listview.jsx';

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
                break;                
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
        newElement.id = length + 1;
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
                break;
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