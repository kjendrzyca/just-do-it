import React, { Component } from 'react'
import './App.css'
import TodoList from './TodoList'

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
          <h2>Just do it!</h2>
        </div>
        <div>
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

          <TodoList todos={this.state.todos} />
        </div>
      </div>
    )
  }
}

export default App
