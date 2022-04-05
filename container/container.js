import React from 'react'
import { Input } from "../Input/input";
import { Text } from "../Text/text";
import { useState } from 'react';
export const Container = () => {
    const [InputValue,setInpeuValue] = useState("");
  return (
    <div>
        <Text textWrite={InputValue}/>
        <Input changeValue={setInpeuValue}/>
    </div>
  )
}
