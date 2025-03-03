import { useState } from 'react'
import { Box } from '@mui/material'
import './App.css'
import ProductTable from './components/ProductTable'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient=new QueryClient()

function App() {

  return (
   
    <QueryClientProvider client={queryClient}>
    <Box>
      <ProductTable/>
    </Box>

    </QueryClientProvider>
    
  
  )
}

export default App
