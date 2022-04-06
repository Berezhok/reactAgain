import {React} from "react"

export const Input = ({changeValue})=> {
   
    return (
        <>
        
    <input  onChange={(event)=>{
        const value = event.target.value;
        changeValue(value)  ;
       }}/>
        </>
        
        
    )
    
}