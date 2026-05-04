let intialState = {user:[]}

import { fetchUser,addUser,pendingUser,removeUser } from "./Action"
import { apiInstance } from "./AxiosInstance"

export let fetchAPI=  ()=>{
    return async(dispatch)=>{
        dispatch(pendingUser)
        let res = await apiInstance.get("/user")
        console.log(res);
        
        dispatch(fetchUser(res.data))
    }
}

export function reduceruser(state=intialState, action){
    switch(action.type)
    {
        case "AddUser": return state
        case "Pending": return {...state, loading:true}
        case "GetUser": return{...state, loading:false,user:[...action.payload]} 
        case "RemoveUser":  return state
        default: return state 
    }
}
