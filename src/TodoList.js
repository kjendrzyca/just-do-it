import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader} from 'material-ui/Card'
import DoneIcon from 'material-ui/svg-icons/action/done'

const TodoRemoveButton = ({id, onClick}) => <div style={{
  display: 'inline-block',
  position: 'absolute',
  right: '16px',
}}>
  <DoneIcon
    onClick={() => onClick(id)}
    hoverColor="#4CAF50"
    style={{
      cursor: "hand"
    }}
  />
</div>

TodoRemoveButton.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

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
              >
                <TodoRemoveButton id={todo.id} onClick={this.props.removeTodo} />
              </CardHeader>
            </Card>
          )
        })}
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

export default TodoList
