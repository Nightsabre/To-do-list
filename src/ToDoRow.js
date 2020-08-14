import React, {Component} from 'react';
export class ToDoRow extends Component {

    render = () =>
    <tr>
        <td>{this.props.item.action}</td>
        <td><input type="checkbox" checked={this.props.item.done}/></td>
    </tr>

};