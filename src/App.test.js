import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import AppComponent from './App'
import {withMaterialTheme, simulateTap} from './utils'

const App = withMaterialTheme(AppComponent)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('should render AddTodoForm and TodoList', () => {
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

it('should display todos added on form', () => {
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
