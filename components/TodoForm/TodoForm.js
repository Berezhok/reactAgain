import React from 'react'
import { TodoCard } from '../TodoCard/TodoCard'


export const TodoForm = ({SubmitHandle}) => {
  return (
    <form onSubmit= {SubmitHandle}>
        <input name='title'/>
        <button type='submit'>Add</button>
    </form>

  )
}