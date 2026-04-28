import ClassBase from "./ClassBased"
import ClassBased2 from "./classBased2"
import ConditionalRendering from "./ConditionalRendering"
import ControlledForm from "./ControlledForm"
import FunctionAnonymous from "./FunctionAnonymous"
import FunctionBased from "./FunctionBased"
import ArrowFunction from "./FunctionBased2"


function App(){
//    
return <div>

    {(()=>{
        return <h1>
            this is iife
        </h1>
    }

    )()}

    {/* <ClassBase />
    <ClassBased2 />
    <ArrowFunction />
    <FunctionAnonymous /> */}
    {/* <FunctionBased></FunctionBased> */}
    <ConditionalRendering></ConditionalRendering>
    <ControlledForm></ControlledForm>





</div>
}
export default App
