import React, {Component} from 'react';

export class ToDoBanner extends Component{
    render = () =>
    <h4 className="bg-dark text-white text-center p-2">
      {this.props.displayName}'s To Do List ({this.props.tasks.filter(
        x => !x.done).length} items remaining
      )
    </h4>
  };