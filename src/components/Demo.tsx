export const Demo = () =>{
    let num: number;
    //  add value
    const handleOnClick = () =>{
        alert("Added OK")
        console.log("hello")
        // num += 1
        // console.log(num)
    }

    return(
        <>
          <input type="text" readOnly style={{marginTop:"60px",marginLeft:"100px"}}/>
          {/* reference a function */}
          <button onClick={handleOnClick}>Click me to +</button>
          {/* inline function */}
          {/* <button onClick={()=>console.log("Hello Button ")}>Click me to +</button> */}
          <button>Click me to -</button>
        </>
       
    );
}