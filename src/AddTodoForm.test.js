import React from 'react'
import ReactDOM from 'react-dom'
import AddTodoFormComponent from './AddTodoForm'
import {withMaterialTheme} from './utils'

const AddTodoForm = withMaterialTheme(AddTodoFormComponent)

it('renders without crashing when required props are provided', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <AddTodoForm
      addTodo={() => {}}
    />,
    div
  )
})
