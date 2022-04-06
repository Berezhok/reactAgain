import React from 'react'
import { TodoCard } from '../TodoCard/TodoCard'
export const TodoList = ({list}) => {
  return (
    <ul>
    {list.map((el)=>
        <TodoCard key={el.id} card={el}/>)}
    </ul>
  )
}