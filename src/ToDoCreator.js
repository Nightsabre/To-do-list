import React, { Component } from 'react';

export class ToDoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { newItemText: "" }
    }; // END OF CONSTRUCTOR

    //Feature 5c
    // Method for the onChange event of the input text below
    updateNewTextValue = (event) => {
        this.setState(
            {newItemText: event.target.value}
        );
    };
    // Feature 5d
    // Method for the onClick of the ADD button
    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({ newItemText: "" }); // This clears the new todo item from the input box
    }
    render = () =>
        <div className="my-1">
            <input className="form-control" value={this.state.newItemText}
                onChange={this.updateNewTextValue} />

            <button className="btn btn-secondary mt-1" onClick={this.createNewTodo}>
                ADD
            </button>

        </div>
};