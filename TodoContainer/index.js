import React, { useState } from 'react'
import { TodoList } from '../TodoList/TodoList'


export const TodoContainer  = () => {

   const [TodoListState,setTodoListState] = useState([{
       id:232,
       title:"gitara"
   }])
  return (
    <div> 
        <TodoList list={TodoListState}/>
    </div>
  )
}
