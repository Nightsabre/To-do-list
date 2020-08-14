import React, { Component } from 'react';
export class ToDoRow extends Component {

    // There are 2 different kinds of PROPS
    // Data PROPS - allows the parent to pass data to the child
    // FUNCTION PROPS - allows the child to communicate with the parent

    //  Below we define the value for the onChange event property as a callback()
    //  This is how child components are able to communicate with parents, as they cannot update the value
    //  of props passed to them from a parent component.  This is because React only supports a one-way data flow (from parent down to child).
    //  However, the parent can provide a function property (prop) that children can call upon whenever something important (like an event) happens.



    render = () =>
        <tr>
            <td>{this.props.item.action}</td>
            <td><input type="checkbox" checked={this.props.item.done}
                onChange={() => this.props.callback(this.props.item)} /></td>
        </tr>

};