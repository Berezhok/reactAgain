import React, { useState } from "react";
import { Container } from "./components/container/index";
import { TodoContainer } from "./components/TodoContainer/TodoContainer";
function App() {
  
  return (
    <div className="App">
      <Container/>
      <TodoContainer/>
    </div>
  );
}

export default App;









// let name = "pika4y";
// const [dynValue, setDynValue] = useState("")
{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
    {name} Learn React<br/>
    {dynValue} Learn React
   <button
    onClick = {
     () => {
       name="rai4y"
     
   }} > Эволюция </button>
    <button
    onClick = {
     () => {setDynValue("rai4y")
   }} > Эволюция на самом деле </button>
 
</header> */}