import { Component } from "react";
import { useState } from "react";

const ConditionalRendering =()=>{
    let[flag, setFlag] = useState(true)
    return (
        <>
        <button onClick={()=>{
            setFlag(!flag)
        }}>Change the flag</button>
        {
        flag
        ? <div style={{height:"300px", background:"purple", width:"400 px"}}>

        </div>
        :
        <div style={{height:"400px", background:"pink", width:"300 px"}}>

        </div>
}
{flag && <h1>this is true</h1>}
        </>
    )
}

export default ConditionalRendering