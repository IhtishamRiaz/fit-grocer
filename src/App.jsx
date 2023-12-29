import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
// Pages import 
import Home from './pages/Home';
// Components Import
import Navbar from './components/Navbar';
import { useGlobalStore } from './stores/globalStore';

function App() {

   const setIsMobile = useGlobalStore((state) => state.setIsMobile);

   useEffect(() => {
      const checkIfMobile = () => {

         const isSmallScreen = window.innerWidth <= 768;

         setIsMobile(isSmallScreen);
      };

      // Initial check
      checkIfMobile();

      // Listen for window resize events to update the state
      const handleResize = () => {
         checkIfMobile();
      };
      window.addEventListener('resize', handleResize);

      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const PageLayout = () => {
      return (
         <>
            <div className='flex min-h-screen'>
               <Navbar />
               <main className='min-h-screen basis-full'>
                  <Outlet />
               </main>
            </div>
         </>
      );
   };

   return (
      <>
         <Routes>
            <Route element={<PageLayout />}>
               <Route path='/' element={<Home />} />
            </Route>
         </Routes>
      </>
   )
}

export default App
