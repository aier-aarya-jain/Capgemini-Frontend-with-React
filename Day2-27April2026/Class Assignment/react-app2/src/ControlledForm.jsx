import React, { useState } from "react"

const ControlledForm=()=>{
    let [student, setStudent]= useState({name:null, email:null})
    function updateTheState(e){
        setStudent(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    console.log("this is Controlled Form");
    return (
        <>
        <h1>this is the form</h1>
        <form onSubmit={(e)=>{
            e.preventDefault()
            console.log(student);
        }}>
            <div>
                <label htmlFor="a"></label>
                <input type="text" name="userName" onChange={(e)=>{
                    
                    updateTheState(e)
                }} id="userName"></input>
            </div>
            <div>
                <label htmlFor="a"></label>
                <input type="password" name="password" onChange={(e)=>{
                    updateTheState(e);
                }} id="password"></input>
            </div>
            <div>
                <label htmlFor="a"></label>
                <input type="email" name="email" onChange={(e)=>{
                    updateTheState(e);
                }} id="email"></input>
            </div>

            <button>Submit</button>
        </form>
        </>
    )
}


export default ControlledForm