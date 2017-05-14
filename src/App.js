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
      currentTodoText: ''
    }
  }

  changeCurrentTodoText = (event) => {
    this.setState({currentTodoText: event.target.value})
  }

  addTodo = () => {
    this.setState(state => ({
      todos: state.todos.concat({
        id: getId(),
        title: state.currentTodoText
      }),
      currentTodoText: ''
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
          {this.state.todos.map(todo => <div key={todo.id}>{todo.title}</div>)}

          <input
            type="text"
            onChange={this.changeCurrentTodoText}
            value={this.state.currentTodoText}
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
