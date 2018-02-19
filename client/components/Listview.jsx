import React from 'react';

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
                <span>{item.address}</span>
                <span>{item.address}</span>
                <span>{item.contact}</span>
                <span onClick={this.delete.bind(this, item.id)} style={{cursor: 'pointer', float: 'right'}}> delete </span>
                <span onClick={this.edit.bind(this, item.id)} style={{cursor: 'pointer', float: 'right', paddingRight: '20px'}}> edit </span>
              </li>
            );
          });
      
        return (
            <div className="sub-content-area" style={{display: 'inline-block', textAlign: 'left', width: '65%', float: 'left', padding: '30px 40px'}}>
                <h1>List view content</h1>
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}