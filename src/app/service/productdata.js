import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => "/products",
    }),

    addNewProduct : builder.mutation({
      query:(productDetails)=>({
             url:"/products/add",
             method:"POST",
             header:{'Content-Type':'application/json'},
             body:productDetails
      })
    }),
    updateProduct : builder.mutation({
      query:({id,updateProductDetails})=>({
        url:`/products/${id}`,
        method:"PUT",
        header:{'Content-Type':'application/json'},
        body:updateProductDetails
      })
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllProductQuery  
  ,useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation
} = productsApi;
