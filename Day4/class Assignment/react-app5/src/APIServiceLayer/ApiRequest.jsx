//npm i axios json-server
// ? To install the axios and json-server son the local project

// npx json-server pathoffile --watch --port portnumber
//? To run the Json server on the given port and watch for the changes in the file

//! How to create the EndPoints in the json server
//? {"EndPointName":[{},{}]} : This is the format to create the EndPoints in the json server


import axios from 'axios';
let axiosInstance = axios.create({
    baseURL:"http://localhost:3001/",
    timeout:5000,
    headers:{'Content-Type':'application/json'}
});

export let postProducts = async()=>{
    let res = await axiosInstance.post("/products",{name:"Iphone", price:100000});
    return res.data;
}

export let patchProduct=async(id,data)=>{
    let res= await axiosInstance.patch(`/products/${id}`,data)
    console.log(res.data);
    
}
 
export let getProducts = async()=>{
    let res = await axiosInstance.get("/products");
    return res.data;
}
