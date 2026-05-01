import React, { createContext, useState } from 'react'
import {Provider} from 'react'
// First we need to create and export the context Api reference
// ? we use  createContext() method
//create conetxt will return an object which has 3 main properties:
//--> $$ typeof  : it is just for identification for the Conetxt
//--> Consumer : Consumer componet consumes the value provided by Provider and accepts in the callback function
//--> Provider : Provider has the props called "value" in which we have to pass the adat so consumer can consume it.


export let contextApi = createContext();
const ContextComponent = (props) => {
  //console.log(contextApi);
 // console.log(props);
 let [state , setState]=useState({count:0});
//  setCount(prev=>({...prev,count:prev.count+1 }));
 function updateState(obj){
   setState(prev=>({...prev,...obj}));
 }
  let {Provider} = contextApi;

  return (
    <div>
        <Provider value = {{name : "Rohit", state, updateState}}>
          {props.children}
        </Provider>

        ContextComponent
      
    </div>
  )
}

export default ContextComponent
