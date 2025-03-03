import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect ,useCallback, useState, useMemo} from 'react';
import http from '../config/http';



export default function useProducts() {
    const [products,setProducts]=useState([])
    const fetchProducts= useCallback(async()=>{
      try {
        const {data}=await http.get('/api/products')
        // console.log(data)
        setProducts(data)
        
      } catch (error) {
        console.log(error)
        
      }
    },[])
  useEffect(()=>{
    fetchProducts()
  },[fetchProducts])
  
  const formattedRows = useMemo(
    ()=>
    products.map((product,index) => ({
      id: product._id,
      s1:index+1,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      image: product.image
    }))
  
  ,[products]) 
  return {formattedRows}
}
   