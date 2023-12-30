import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import CartItemCard from '../components/Cart/CartItemCard'
import Button from '../components/ui/button'

const Cart = () => {
   return (
      <div className='pt-12 pb-6 px-7 min-h-screen flex flex-col'>
         <div className='relative mb-7'>
            <BackIcon />
            <h1 className='absolute text-2xl font-semibold top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>My Bucket</h1>
         </div>

         {/* All Cart Items */}
         <div className='space-y-5 mb-8 flex-grow'>
            <CartItemCard />
            <CartItemCard />
            <CartItemCard />
            <CartItemCard />
            <CartItemCard />
         </div>

         {/* Checkout button */}
         <div className='flex items-center justify-between'>
            <span className='font-inter'>
               <p className='text-[#434141] text-lg'>Total</p>
               <h3 className='text-3xl'>24.44 <span className='text-primary'>$</span></h3>
            </span>
            <Button>
               Checkout
            </Button>
         </div>

      </div>
   )
}

export default Cart