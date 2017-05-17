import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import AppComponent from './App'
import {withMaterialTheme, simulateTap} from './utils'

const App = withMaterialTheme(AppComponent)

it('should render without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('should display AddTodoForm and TodoList', () => {
  // given
  const addTodoStub = jest.fn()

  // when
  const component = mount(
    <App
      addTodo={addTodoStub}
    />
  )

  // then
  expect(component.find('AddTodoForm').length).toBe(1)
  expect(component.find('TodoList').length).toBe(1)
})

it('should display todos added on the form', () => {
  // given
  const addTodoStub = jest.fn()
  const component = mount(
    <App
      addTodo={addTodoStub}
    />
  )

  expect(component.find('Card').length).toBe(0)

  // when
  const todoTitle = component.find("#todo-title")
  todoTitle.node.value = 'homework'

  const todoDescription = component.find("#todo-description")
  todoDescription.node.value = 'math and computer science'

  todoTitle.simulate('change')
  todoDescription.simulate('change')

  simulateTap(component.find('#add-button').node)

  // then
  expect(component.find('Card').length).toBe(1)
})

it('should remove todos', () => {
  // given
  const addTodoStub = jest.fn()
  const component = mount(
    <App
      addTodo={addTodoStub}
    />
  )

  expect(component.find('Card').length).toBe(0)

  const todoTitle = component.find("#todo-title")
  todoTitle.node.value = 'homework'

  const todoDescription = component.find("#todo-description")
  todoDescription.node.value = 'math and computer science'

  todoTitle.simulate('change')
  todoDescription.simulate('change')

  simulateTap(component.find('#add-button').node)

  expect(component.find('Card').length).toBe(1)

  // when
  const removeIcon = component
    .find('Card').first()
    .find('TodoRemoveButton').first()
    .find('svg')

  removeIcon.simulate('click')

  // then
  expect(component.find('Card').length).toBe(0)
})
