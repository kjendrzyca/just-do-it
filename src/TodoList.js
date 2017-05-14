import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader} from 'material-ui/Card'
import './TodoList.css'

class TodoList extends Component {
  render() {
    return (
      <div className="TodoList">
        {this.props.todos.map(todo => {
          return (
            <Card key={todo.id}>
              <CardHeader
                title={todo.title}
                subtitle={todo.description}
              />
            </Card>
          )
        })}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodoList
