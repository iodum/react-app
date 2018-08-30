import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Steph', age: 26}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked');
    // DON'T DO THIS this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Steph', age: 27}
      ]
    });
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Steph', age: 26}
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>This is working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler} >Switch Name</button>
        { this.state.showPersons === true ?
          <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!!')}
            change={this.nameChangeHandler}>My hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
        : null
      }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!'));
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!'));
    // return React.createElement('div', {className: 'App' React.createElement('h1', null, 'Hi!!!'));
  }
}

export default App;
