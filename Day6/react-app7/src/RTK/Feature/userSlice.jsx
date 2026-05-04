import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name : "userSlice",
    initialState : {user:[]},
    reducers :{
        addUser : (state,action)=>{
            console.log(state,action);
        }
    },
})

export let {addUser} = userSlice.actions
export default userSlice.reducer