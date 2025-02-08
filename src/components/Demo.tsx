import { useEffect, useState } from "react";

export const Demo = () =>{

    const [value,setValue] = useState(0); //useState(Initial state)

    // let num = 0;
    //  add value
    const handleOnClickAdd = () =>{
        setValue(value + 1)
        console.log(value)
    }
    const handleOnClickMinus = () =>{
        setValue(value - 1)
        console.log(value)
    }

    useEffect(()=>{
        console.log("Use effect run")
    })

    return(
        <>
          <input type="text" readOnly style={{marginTop:"60px",marginLeft:"100px"}} value={value}/>
          {/* reference a function */}
          <button onClick={handleOnClickAdd}>Click me to +</button>
          {/* inline function */}
          {/* <button onClick={()=>console.log("Hello Button ")}>Click me to +</button> */}
          <button onClick={handleOnClickMinus}>Click me to -</button>
        </>
       
    );
}