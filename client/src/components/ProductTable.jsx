
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import http from '../config/http';
import { useEffect ,useCallback, useState, useMemo} from 'react';

const columns = [
  { field: 's1', headerName: 'SL', width: 90 },
  {
    field: 'name',
    headerName: 'Product name',
    width: 150,
   
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
  
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    width: 110,
   
  },
  {
    field: 'image',
    headerName: 'Image',
    
    width: 160,
    
  },
];


export default function ProductTable() {
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

const getFormattedRows = useMemo(
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
 


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={getFormattedRows}
        columns={columns}
        disableRowSelectionOnClick
        
        
      />
    </Box>
  );
}
