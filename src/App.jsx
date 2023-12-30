import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Pages import 
import PageLayout from './pages/PageLayout'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import Tracking from './pages/Tracking'
import Profile from './pages/Profile'

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
         </Routes>
      </>
   )
}

export default App
