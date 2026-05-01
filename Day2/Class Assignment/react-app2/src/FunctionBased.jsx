import { useState } from "react";
import ClassBased2 from "./classBased2";

function FunctionBased(){
    let [state,setState] =useState(100);
    //initial value updating Function= useState(initial Value)
    // console.log(state);
    // console.log(useState);
    // console.log(this)
    // return <div>

    //     <ClassBased2></ClassBased2>
    //     <h1>this is through function</h1>
    // </div>
    let a = 20;
    return <>
    {a}
    <hr />
    <button onClick={()=>{
        
        setState(state+10)
        // console.log(a);
        console.log("==========")
        console.log(state);
        console.log("================")
    }}>INCREMENT</button>
    {state} state
    </>
    
}
export default FunctionBased