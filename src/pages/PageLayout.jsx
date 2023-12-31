import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom';
// Components Import
import Navbar from '../components/Navbar/Navbar';
import { useGlobalStore } from '../stores/globalStore';

const PageLayout = () => {

   const setIsMobile = useGlobalStore((state) => state.setIsMobile);

   useEffect(() => {
      const checkIfMobile = () => {

         const isSmallScreen = window.innerWidth <= 500;

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


   return (
      <>
         <div className='flex min-h-screen'>
            <Navbar />
            <main className='min-h-screen pb-28 basis-full pt-14 px-7'>
               <Outlet />
            </main>
         </div>
      </>
   );
};

export default PageLayout