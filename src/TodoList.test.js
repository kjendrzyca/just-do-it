import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import TodoListComponent from './TodoList'
import {withMaterialTheme} from './utils'

const TodoList = withMaterialTheme(TodoListComponent)

const sampleTodos = [
  {
    id: 1,
    title: 'homework',
    description: 'math, computer science',
  },
  {
    id: 2,
    title: 'shopping',
    description: 'tomatoes, potatoes',
  }
]

it('renders without crashing when required props are provided', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <TodoList
      todos={[]}
      removeTodo={() => {}}
    />,
    div
  )
})

it('should display todos as Card components', () => {
  // when
  const component = mount(
    <TodoList
      todos={sampleTodos}
      removeTodo={() => {}}
    />
  )

  // then
  const cards = component.find('Card')
  expect(cards.length).toBe(2)

  expect(cards.find('CardHeader').at(0).containsAllMatchingElements([
    <span>{sampleTodos[0].title}</span>,
    <span>{sampleTodos[0].description}</span>
  ])).toBe(true)

  expect(cards.find('CardHeader').at(1).containsAllMatchingElements([
    <span>{sampleTodos[1].title}</span>,
    <span>{sampleTodos[1].description}</span>
  ])).toBe(true)

  expect(cards.find('TodoRemoveButton').length).toBe(2)
})

it('should call removeTodo handler when clicking on TodoRemoveButton', () => {
  // given
  const removeTodoStub = jest.fn()

  // when
  const component = mount(
    <TodoList
      todos={sampleTodos}
      removeTodo={removeTodoStub}
    />
  )

  const removeIcon = component
    .find('Card').first()
    .find('TodoRemoveButton').first()
    .find('svg')

  removeIcon.simulate('click')

  // then
  expect(removeTodoStub).toBeCalledWith(sampleTodos[0].id)
})

it('should not display tods when list is empty', () => {
  // when
  const component = mount(
    <TodoList
      todos={[]}
      removeTodo={() => {}}
    />
  )

  // then
  const cards = component.find('Card')
  expect(cards.length).toBe(0)
})
