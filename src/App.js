import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

let id = 0
const getId = () => id++

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      currentTodoTitle: '',
      currentTodoDescription: ''
    }
  }

  changeCurrentTodoText = (event) => {
    if (event.target.id === 'todo-title') {
      this.setState({currentTodoTitle: event.target.value})
      return
    }

    this.setState({currentTodoDescription: event.target.value})
  }

  addTodo = () => {
    this.setState(state => ({
      todos: state.todos.concat({
        id: getId(),
        title: state.currentTodoTitle,
        description: state.currentTodoDescription,
      }),
      currentTodoTitle: '',
      currentTodoDescription: '',
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          {this.state.todos.map(todo => <div key={todo.id}>
            {todo.title} <br />
            {todo.description}
          </div>)}

          <input
            id="todo-title"
            type="text"
            onChange={this.changeCurrentTodoText}
            value={this.state.currentTodoTitle}
          />
          <input
            id="todo-description"
            type="text"
            onChange={this.changeCurrentTodoText}
            value={this.state.currentTodoDescription}
          />
          <button onClick={this.addTodo}>
            add
          </button>
        </div>
      </div>
    )
  }
}

export default App
