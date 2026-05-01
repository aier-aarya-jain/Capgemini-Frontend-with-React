import { Component } from "react";

class NewClassBased extends Component{
    constructor(){
        super();
        console.log(this);
    }
    render(){
        return <h1> This is New Class Based Component </h1>
    }
}
export default NewClassBased;