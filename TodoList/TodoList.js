import React from 'react'

export const TodoList = ({list}) => {
  return (
    <>
    {list.map((el)=><li key={el.id}>{el.title}</li>)}
    </>
  )
}
