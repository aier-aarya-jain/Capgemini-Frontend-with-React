import { Component } from "react";

class ClassBase extends Component{
    constructor(){
        super()
        console.log(this)
    }
    render(){
        return <h2>this is the heading form Class Based Component</h2>
    }
}

export default ClassBase