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
