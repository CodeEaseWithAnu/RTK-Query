import React from 'react'
import {useDeleteProductMutation} from '../app/service/productdata'
const Deleteproduct = () => {
  const [deleteproduct,{data,isError,isLoading} ] = useDeleteProductMutation();
  const handleProductDelete = async ()=>{
    try{
          await deleteproduct(1)
    }catch(err){
        console.log("error while delete"+err);
        
    }
  }
  return (
    <div>
        <h1>{data?.title ? `${data.title} id delete successfully` : ''}</h1>
      <button onClick={handleProductDelete} disabled={isLoading}>Delete product</button>
    </div>
  )
}

export default Deleteproduct
