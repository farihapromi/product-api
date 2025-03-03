import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect ,useCallback, useState, useMemo} from 'react';
import http from '../config/http';
const PRODUCT_QUERY_KEY = 'products';



export default function useProducts() {
    const productQuery = useQuery({
        queryKey: [PRODUCT_QUERY_KEY],
        queryFn: () => fetchProducts(),
      });
    
    
 

  return { productQuery}
}
const fetchProducts = async () => {
    const { data } = await http.get('/api/products');
    return data;
  };
  
  const createProduct = async (newProduct) => {
    const { data } = await http.post('/api/products', newProduct);
    return data;
  };