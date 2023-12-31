import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import Button from '../components/ui/button'
import RiderImg from '../assets/images/rider.png'

const SuccessMessage = () => {
   return (
      <div className='pt-12 pb-6 px-7 min-h-screen flex flex-col'>
         <div className='relative mb-7'>
            <BackIcon />
            <h1 className='absolute text-2xl font-semibold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>Checkout</h1>
         </div>

         {/* Page Content*/}
         <div className='mb-8 flex-grow border border-red-900 flex flex-col items-center justify-between gap-3'>
            <h1 className='text-2xl font-semibold text-center leading-9 mb-2'>"Congratulations! Your   Order Has Been Placed!"</h1>
            <div>
               <img src={RiderImg} alt="rider png" />
            </div>
            <p className='text-center text-muted'>Thank you for choosing our services! Your order has been successfully placed and is now being processed. We appreciate your trust in us and look forward to serving you.</p>
         </div>

         {/* Checkout button */}
         <div className='flex items-center justify-center'>
            <Button>
               Return Home
            </Button>
         </div>

      </div>
   )
}

export default SuccessMessage