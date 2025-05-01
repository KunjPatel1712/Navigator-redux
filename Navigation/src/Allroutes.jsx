import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './Product'
import Login from './Login'
import Privatepage from './Privatepage'
import ProductDescription from './ProductDescription'

const Allroutes = () => {
  return (
    <div>
        <Routes >
        <Route path="/product" element={
          <Privatepage>
        <Product />
        </Privatepage>
}>
  
</Route>
 <Route path="/product/:id" element={<ProductDescription />} /> 
            <Route path='/' element={<h1 style={{textAlign:"center"}}>Home page</h1>}></Route>
            <Route path='/about' element={<h1 style={{textAlign:"center"}}>Aboutpage</h1>}>Aboutpage</Route>
            <Route path='/login' element={<Login/>}></Route>

        </Routes>
    </div>
  )
}

export default Allroutes