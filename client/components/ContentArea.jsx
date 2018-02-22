import React from 'react';
import axios from 'axios';
import {FormContent} from './FormContent.jsx';
import {Listview} from './Listview.jsx';

export class ContentArea extends React.Component {
    constructor() {
        super();
        this.state = ({userList: [], currentUser: {}, filteredList: []});
        this.addTolist = this.addTolist.bind(this);
        this.removeFromList = this.removeFromList.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.editElem = this.editElem.bind(this);
        this.clearCurrentUser = this.clearCurrentUser.bind(this);
        this.filterUserList = this.filterUserList.bind(this);
        this.updateUserList = this.updateUserList.bind(this);

    }
    componentDidMount() {
        this.getUserListFromServer();
    }
    getUserListFromServer() {
        axios.get('http://127.0.0.1:1337/user/getUserList', {
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
        })
        .then((res) => {
            console.log(res);
            this.updateUserList(res.data);
        }, (err) => {
            console.log(err);
        });
    }
    updateUserList(list) {
        this.setState({userList: list, filteredList: list});
    }
    filterUserList(searchStr) {
        console.log('recieved search str as ', searchStr);
        let fullList = this.state.userList;
        if(searchStr.length > 0) {
            let newList = this.state.userList;
            let resultList = [];
            for (var count = 0; count < newList.length; count++) {
                for (let key in newList[count]) {
                    if ( newList[count][key].toString().indexOf(searchStr) != -1) {
                        resultList.push(newList[count]);
                        break;
                    }
                }
            }
            this.setState({'filteredList': resultList});
        } else {
            this.setState({'filteredList': fullList});
        }
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
        this.updateUserList(newList);
        //this.setState({userList: newlist});
    }

    addTolist(newElement) {
        let length = this.state.userList.length;
        newElement.id = length + 1;
        // this.setState({
        //     userList: this.state.userList.concat([newElement])
        // });
        let list = this.state.userList.concat([newElement]);
        this.updateUserList(list);
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
                    <FormContent list={this.state.filteredList} add={this.addTolist} update={this.updateUser} user={this.state.currentUser} clearUser={this.clearCurrentUser}/>
                </div>

                <div className="list-view">
                    <Listview list={this.state.filteredList} delete={this.removeFromList} edit={this.editElem} filterListView={this.filterUserList}/>
                </div>
            </div>
        );
    }
}