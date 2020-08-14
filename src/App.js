import { Component } from 'react';
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ToDoBanner } from './ToDoBanner';
import { ToDoRow } from './ToDoRow';
import { ToDoCreator } from './ToDoCreator';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


export default class App extends Component {
  // Above we have created a class called App that extends the functionality of the Component class
  // The export keyword makes the class available for use outside the JS file where it is created 

  constructor() {
    //  We are going to create state data for our component. To do that, 
    //  we need to create a constructor method. This method will get called when an object is created using this class. 
    //  Said another way, this method will be called when the component is initialized. 

    //  To ensure that we have all the necessary features from React to create a stateful component, 
    //  we need to call a method called super().  This super() calls the constructor for the {Component} class in react.
    super();
    //React components have a special poroperty called "state" which is used to define the state of data

    this.state = {
      userName: "Logan",
      todoItems: [
        { action: "Practice Guitar", done: false },
        { action: "Sleep", done: false },
        { action: "Pay Bills", done: true },
        { action: "Play Pokemon", done: false },
        { action: "Write Code", done: false }
      ]
    }

  } // END OF CONSTRUCTOR


  // Feature 3
  //  If the ToDoRow Component's "done" property experiences a change event (checking the Done box in the UI) 
  //  then the ToDoRow component calls a Callback method called toggleTodo (below) and passes toggleTodo the checked todo item

  todoTableRows = (isTaskDone) => this.state.todoItems.filter(x => x.done == isTaskDone).map(notCompleted =>
    <ToDoRow
      key={notCompleted.action}
      item={notCompleted}
      callback={this.toggleTodo} // Call back will be invoked(executed, run) when everything in <ToDoRow> is finished
    />
  )


  // Feature 4
  //  The toggleTodo method is invoked as a callback when the ToDoRow component has a change event to the "done" property
  //  .setState allows the data to be updated
  //  When setState is invoked, React will make a new object with the changes.  Under the hood, 
  //  React will compare the new object with the DOM version of the object.  If there is a difference between the 2 objects then the DOM will get re-drawn and we see the changes 
  // the toggleTodo function is invoked as a callback from the <ToDoRow> component

  toggleTodo = (todo) => this.setState(
    {
      todoItems: this.state.todoItems.map(
        item => item.action === todo.action ? { ...item, done: !item.done } : item
      )
    }
  );

  // Feature 5a

  //  the method below is a built in react method to handle logic for when the app "mounts" or "loads"
  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(
      data != null ? JSON.parse(data) : {
        userName: "Billy Bob",
        todoItems: [
          { action: "Go Fishing", done: false },
          { action: "Go hunting", done: false },
          { action: "Go Camping", done: false }
        ]
      }
    )
  };

  // Feature 5e
  // The method below is the callback for the ToDoCreator component
  createNewTodoCallback = (newTask) => {
    if (!this.state.todoItems.find(
      x => x.action === this.state.newItemText)) {
      this.setState({
        todoItems: [...this.state.todoItems, { action: newTask, done: false }]
      }, () => localStorage.setItem("todos", JSON.stringify(this.state)) // END of setItem
      ); // END of setState
    }
  }

  // When using the lambda syntax the return keyword is not needed
  render = () =>
    <div>
      {/* Feature 1&2 this is a react stub */}
      <ToDoBanner
        displayName={this.state.userName}
        tasks={this.state.todoItems}
      />

      {/* Feature 5b */}
      <ToDoCreator
        callback={this.createNewTodoCallback}
      />

      {/* Feature 3 */}
      <table className="table table-striped table bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {this.todoTableRows(false)}
        </tbody>
      </table>
    </div>
}; //END OF APP

// export default App;
