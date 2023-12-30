import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Pages import 
import PageLayout from './pages/PageLayout'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Tracking from './pages/Tracking'
import Profile from './pages/Profile'
import ProductDescPage from './pages/ProductDescPage'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {

   return (
      <>
         <Routes>
            <Route element={<PageLayout />}>
               <Route path='/' element={<Home />} />
               <Route path='/favourites' element={<Favourites />} />
               <Route path='/tracking' element={<Tracking />} />
               <Route path='/profile' element={<Profile />} />
            </Route>
            <Route path='/prod' element={<ProductDescPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
         </Routes>
      </>
   )
}

export default App
