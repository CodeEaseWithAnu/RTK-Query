import React from 'react'
import {useUpdateProductMutation} from '../app/service/productdata'
const UpdateProduct = () => {
    const [updateProduct,{data,isError,isLoading}] = useUpdateProductMutation();

    const handleUpdateProduct = async () =>{
           const updateProductTitle = {
            title:"Laptop"
           }
          await updateProduct({
             id:1,
             updateProductDetails:updateProductTitle
          })
    }
  return (
    <div>
        <p>{data?.title}</p>
      <button onClick={handleUpdateProduct} disabled={isLoading}>Update Product</button>
    </div>
  )
}

export default UpdateProduct
