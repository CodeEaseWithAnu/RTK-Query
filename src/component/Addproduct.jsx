import React from 'react';
import  {useAddNewProductMutation} from '../App/service/productdata';

const Addproduct = () => {
    const [addNewProduct,{data,isError,isLoading}]= useAddNewProductMutation();
    const handleAddData = async ()=>{
            try{

                 const productData = {
                    title:"Laptop",
                    description:"LENOVO Laptop"
                 }
                 await addNewProduct(productData)
            }catch(error){
                console.log("Error while post"+error);
                
            }
    }
  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>

      <button onClick={handleAddData} disabled={isLoading}>Add new Product</button>
    </div>
  )
}

export default Addproduct
