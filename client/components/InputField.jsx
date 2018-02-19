import React from 'react';

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
        let inputType = undefined;
            if (this.props.fieldName == 'age') {
                inputType = <input style={{float: 'right'}} type="number" id={this.props.fieldName} value={this.props.value} onChange={this.handleChange} />
            }else if(this.props.fieldName == 'email') {
                inputType = <input style={{float: 'right'}} type="email" id={this.props.fieldName} value={this.props.value} onChange={this.handleChange} />
            } else {
                inputType = <input style={{float: 'right'}} type="text" id={this.props.fieldName} value={this.props.value} onChange={this.handleChange} />
            }
        return (
            <div className="input-field" style={{clear: 'both', padding: '10px 0'}}>
                <label style={{float: 'left'}}>Enter {this.props.fieldName} </label>
                {inputType}
            </div>
        );
    }
}