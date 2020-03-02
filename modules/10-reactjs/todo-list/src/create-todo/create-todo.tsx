import React, { useState } from 'react'
<<<<<<< HEAD
=======
import { Button } from '../core/components/button/button'
>>>>>>> 99f7994a67e6e1b81453f0c456b51fc4f6adc51c

export function CreateTodo({ onCreate }: { onCreate: (todoText: string) => void }) {
  const [todoText, setTodoText] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onCreate(todoText)
        setTodoText('')
      }}
    >
      <label>
        Todo
        <input value={todoText} onChange={event => setTodoText(event.target.value)} />
      </label>
<<<<<<< HEAD
      <button onClick={() => setTodoText('')}>Clear todo</button>
      <button type="submit">Create todo</button>
=======
      <Button className="my-button" onClick={() => setTodoText('')}>
        Clear todo
      </Button>
      <Button submit theme="primary">
        Create todo
      </Button>
>>>>>>> 99f7994a67e6e1b81453f0c456b51fc4f6adc51c
    </form>
  )
}
