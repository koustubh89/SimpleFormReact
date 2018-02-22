import React from 'react';
import {SearchBar} from './SearchBar.jsx';


export class Listview extends React.Component {
    constructor(props) {
        super(props);
    }
    filter(searchString) {
        console.log('filter function in list view');
        this.props.filterListView(searchString);
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
                <a href="{item.name}"  style={{display: 'inline-block', width: '150px'}}>{item.name}</a>
                <span style={{marginLeft: '20px', display: 'inline-block', width: '180px'}}>{item.email}</span>
                <span style={{marginLeft: '20px', display: 'inline-block', width: '180px'}}>{item.address}</span>
                <span style={{marginLeft: '20px', display: 'inline-block', width: '180px'}}>{item.contact}</span>
                <span onClick={this.delete.bind(this, item.id)} style={{cursor: 'pointer', float: 'right'}}> delete </span>
                <span onClick={this.edit.bind(this, item.id)} style={{cursor: 'pointer',    float: 'right', paddingRight: '20px'}}> edit </span>
              </li>
            );
          });
        if (listItems.length > 0) {
            return (
                <div className="sub-content-area" style={{display: 'inline-block', textAlign: 'left', width: '65%', float: 'left', padding: '30px 40px'}}>
                    <h1>List view content</h1>
                    <SearchBar search={this.filter.bind(this)}/>
                    <ul style={{display: 'inline-block'}}>
                        {listItems}
                    </ul>
                </div>
            );
        } else {
            return (
                <div className="sub-content-area" style={{display: 'inline-block', textAlign: 'left', width: '65%', float: 'left', padding: '30px 40px'}}>
                    <h1>List view content</h1>
                    <SearchBar search={this.filter.bind(this)}/>
                    <span> No user in the list </span>
                </div>
            )
        }
    }
}