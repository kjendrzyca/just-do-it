import React from 'react'
import ReactDOM from 'react-dom'
import TodoListComponent from './TodoList'
import {withMaterialTheme} from './utils'

const TodoList = withMaterialTheme(TodoListComponent)

it('renders without crashing when required props are provided', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <TodoList
      todos={[]}
      removeTodo={() => {}}
    />,
    div
  )
})
