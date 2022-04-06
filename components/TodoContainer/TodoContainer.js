import React, { useState } from 'react'
import { TodoList } from '../TodoList/TodoList'
import { TodoForm } from '../TodoForm/TodoForm'

export const TodoContainer  = () => {

   const [TodoListState,setTodoListState] = useState([{
       id:232,
       title:"gitara"
   }])
   const handleSubmit = (event) => {
     event.preventDefault()
        const  {
        target: {title}
      } = event;
      const task = {
         id: Math.random(),
         title: title.value,
      }
      setTodoListState((prevVal)=>{
        return [...prevVal,task]
      })
    }
  return (
    <div> 
        < TodoForm SubmitHandle = {handleSubmit} />
        <TodoList list={TodoListState}/>
    </div>
  )
}