import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import AddTodoFormComponent from './AddTodoForm'
import {withMaterialTheme, simulateTap} from './utils'

const AddTodoForm = withMaterialTheme(AddTodoFormComponent)

it('should render without crashing when required props are provided', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <AddTodoForm
      addTodo={() => {}}
    />,
    div
  )
})

it('should not call addTodo when input values are empty', () => {
  // given
  const addTodoStub = jest.fn()
  const component = mount(
    <AddTodoForm
      addTodo={addTodoStub}
    />
  )

  // when
  simulateTap(component.find('#add-button').node)

  // then
  expect(addTodoStub).not.toBeCalled()
})

it('should call addTodo handler when title input is filled in', () => {
  // given
  const addTodoStub = jest.fn()
  const component = mount(
    <AddTodoForm
      addTodo={addTodoStub}
    />
  )

  // when
  const todoTitle = component.find("#todo-title")
  todoTitle.node.value = 'homework'
  todoTitle.simulate('change')

  simulateTap(component.find('#add-button').node)

  // then
  expect(addTodoStub).toHaveBeenLastCalledWith('homework', '')
})

it('should not call addTodo handler when title input is empty string with spaces only', () => {
  // given
  const addTodoStub = jest.fn()
  const component = mount(
    <AddTodoForm
      addTodo={addTodoStub}
    />
  )

  // when
  const todoTitle = component.find("#todo-title")
  todoTitle.node.value = '   '
  todoTitle.simulate('change')

  simulateTap(component.find('#add-button').node)

  // then
  expect(addTodoStub).not.toBeCalled()
})

it('should call addTodo handler when title and description inputs are filled in and clear the inputs', () => {
  // given
  const addTodoStub = jest.fn()
  const component = mount(
    <AddTodoForm
      addTodo={addTodoStub}
    />
  )

  // when
  const todoTitle = component.find("#todo-title")
  todoTitle.node.value = 'homework'

  const todoDescription = component.find("#todo-description")
  todoDescription.node.value = 'math and computer science'

  todoTitle.simulate('change')
  todoDescription.simulate('change')

  simulateTap(component.find('#add-button').node)

  // then
  expect(addTodoStub).toHaveBeenLastCalledWith('homework', 'math and computer science')
  expect(todoTitle.node.value).toBe('')
  expect(todoDescription.node.value).toBe('')
})
