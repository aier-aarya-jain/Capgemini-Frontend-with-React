export const addUser= {type:"AddUser"}
export const pendingUser= {type:"Pending"}
export const fetchUser= (data)=>{
    return {payload:[...data],type:"GetUser"}
}
export const removeUser= {type:"RemoveUser"}
