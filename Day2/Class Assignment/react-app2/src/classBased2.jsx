import { Component } from "react";

class ClassBased2 extends Component{
    constructor(){
        super()
        console.log(this);
    }

    render(){
        return <h1>classBased2 ki line hai yeh</h1>
    }
}
export default ClassBased2