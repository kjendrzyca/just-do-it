import React, { Component } from 'react'
import './App.css'
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList'

let id = 0
const getId = () => id++

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: {}
    }
  }

  removeTodo = (id) => {
    this.setState(({todos}) => {
      delete todos[id]
      return {todos}
    })
  }

  addTodo = (title, description) => {
    const newId = getId()

    this.setState(state => ({
      todos: {
        ...state.todos,
        [newId]: {
          id: newId,
          title: title,
          description: description,
        }
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Just do it!</h2>
        </div>
        <div>
          <AddTodoForm
            addTodo={this.addTodo}
          />

          <TodoList
            todos={Object.values(this.state.todos)}
            removeTodo={this.removeTodo}
          />
        </div>
      </div>
    )
  }
}

export default App
