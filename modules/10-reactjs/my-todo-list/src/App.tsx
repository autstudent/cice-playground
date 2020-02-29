import React, { useState } from 'react'
import './App.css'
import { Todo } from './interfaces/todo'
import styles from './AppTodoList.module.css'
import classNamesBind from 'classnames/bind'

const cx = classNamesBind.bind(styles)

function App() {
  const item1: Todo = {
    id: 1,
    name: 'Task 1',
    content: 'It is indifferent 1',
    state: true
  }

  const item2: Todo = {
    id: 2,
    name: 'Task 2',
    content: 'It is indifferent 2',
    state: true
  }

  const item3: Todo = {
    id: 3,
    name: 'Task 3',
    content: 'It is indifferent 3',
    state: true
  }

  const [todos, setTodos] = useState<Todo[]>([item1, item2, item3])

  function addTodo(todo: Todo) {
    setTodos([...todos, todo])
  }

  function checkBoxState() {
    const checkbox = document.getElementById('state')

    if (checkbox) console.log(checkbox)

    console.log('NOOO')
  }

  return (
    <div className="App">
      <div className="App-header">
        {todos.map(todo => (
          <div key={todo.id} className={cx('App-list')}>
            <input type="checkbox" id="state" name="state" onClick={() => checkBoxState()} />
            <div className={cx('App-list-todo')}>
              <div className={cx('App-list-todo-item')}>
                <h2>{todo.name}</h2>
              </div>
              <div className={cx('App-list-todo-item')}>
                <p>{todo.content}</p>
              </div>
            </div>
          </div>
        ))}
        <form action="">
          <div className={cx('App-list')}>
            <input type="checkbox" id="state" name="state" disabled />
            <div className={cx('App-list-todo')}>
              <div className={cx('App-list-todo-item')}>
                <input type="text" id="fname" name="fname" />
                <i></i>
              </div>
              <div className={cx('App-list-todo-item')}>
                <input type="text" id="lname" name="lname" />
                <i></i>
              </div>
              <div className={cx('App-list-todo-item')}>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
