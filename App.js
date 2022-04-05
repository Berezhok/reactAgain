
import React, { useState } from "react";
import { Container } from "./component/container/container";
import { TodoContainer } from "./component/TodoContainer";
function App() {
  
  return (
    <div className="App">
      <Container/>
      <TodoContainer/>
    </div>
  );
}

export default App;
