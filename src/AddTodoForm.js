import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import AddIcon from 'material-ui/svg-icons/content/add'

class AddTodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentTodoTitle: '',
      currentTodoDescription: '',
      isError: false
    }
  }

  changeCurrentTodoText = (event) => {
    if (event.target.id === 'todo-title') {
      this.setState({
        currentTodoTitle: event.target.value,
        isError: false
      })
      return
    }

    this.setState({currentTodoDescription: event.target.value})
  }

  addTodo = () => {
    const {currentTodoTitle, currentTodoDescription} = this.state

    if (!currentTodoTitle.trim()) {
      this.setState({isError: true})
      return
    }

    this.props.addTodo(currentTodoTitle, currentTodoDescription)

    this.setState({
      currentTodoTitle: '',
      currentTodoDescription: '',
    })
  }

  render () {
    return (
      <div className="AddTodoForm">
        <TextField
          id="todo-title"
          errorText={this.state.isError && "This field is required"}
          fullWidth
          hintText="what do you want to do?"
          onChange={this.changeCurrentTodoText}
          value={this.state.currentTodoTitle}
        />
        <TextField
          id="todo-description"
          fullWidth
          multiLine
          rowsMax={4}
          hintText="description"
          onChange={this.changeCurrentTodoText}
          value={this.state.currentTodoDescription}
        />
        <RaisedButton
          id="add-button"
          fullWidth
          primary={true}
          icon={<AddIcon />}
          onTouchTap={this.addTodo}
        />
      </div>
    )
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodoForm
