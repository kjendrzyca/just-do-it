import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import AddIcon from 'material-ui/svg-icons/content/add';
import './App.css'
import TodoList from './TodoList'

let id = 0
const getId = () => id++

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: {},
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

  removeTodo = (id) => {
    this.setState(({todos}) => {
      delete todos[id]
      return {todos}
    })
  }

  addTodo = () => {
    if (!this.state.currentTodoTitle) {
      return
    }
    const newId = getId()
    this.setState(state => ({
      todos: {
        ...state.todos,
        [newId]: {
          id: newId,
          title: state.currentTodoTitle,
          description: state.currentTodoDescription,
        }
      },
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
          <TextField
            id="todo-title"
            hintText="what do you want to do?"
            onChange={this.changeCurrentTodoText}
            value={this.state.currentTodoTitle}
          />
          <TextField
            id="todo-description"
            hintText="description"
            onChange={this.changeCurrentTodoText}
            value={this.state.currentTodoDescription}
          />
          <RaisedButton
            id="todo-description"
            primary={true}
            icon={<AddIcon />}
            onTouchTap={this.addTodo}
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
