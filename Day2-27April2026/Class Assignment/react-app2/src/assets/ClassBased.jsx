import { Component } from "react";

class ClassBased extends Component{
    constructor(){
        super();
        console.log("Constructor called");
    }
    render(){
        return <h1> Class Based Component </h1>
    }
}
export default ClassBased;