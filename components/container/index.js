import React from 'react'
import { Input } from "../Input/Input";
import { Text } from "../Text/Text";
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