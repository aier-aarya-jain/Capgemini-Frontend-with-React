import React from 'react'
import { contextApi } from './ContextComponent'
import { useContext } from 'react'
import { getProducts, patchProduct, postProducts } from '../APIServiceLayer/ApiRequest';
const ChildContext = () => {
    //let { Consumer } = contextApi;
    let data = useContext(contextApi);
    console.log(data);
    
  return (
    <div>
        {data.name}
        <h2>{data.state.count}</h2>
        <button onClick={()=>{data.updateState({count:data.state.count+1})}}>+</button>
        <button onClick={()=>{data.updateState({count:data.state.count-1})}}>-</button>
        <br>
        </br>
        <br>    
        </br>
        <button onClick={()=>{postProducts()}}>Add Product</button>
        <button onClick={()=>{patchProduct(1,{price:50000})}}>Update Product</button>
        <button onClick={()=>{getProducts()}}>Get Product</button>

    </div>
  )
}

export default ChildContext
