import React from 'react'

const CartItemCard = () => {
   return (
      <div className="bg-card p-[10px] pr-6 flex gap-6 rounded-lg">
         {/* Card Img */}
         <div className='object-cover aspect-square w-[92px] h-[92px] '>
            <img src="/images/potato-salad.jpg" alt="potato" className='rounded-[15px]' />
         </div>
         {/* Card Content */}
         <div className='text-sm font-medium flex flex-col justify-between pt-1'>
            <p className='leading-5 line-clamp-3'>Green salad with mashed potatots</p>
            <div className='flex items-center justify-between'>
               <p className='font-normal text-muted'>Quantity 2</p>
               <p><span className='text-primary'>$ </span>24.44</p>
            </div>
         </div>
      </div>
   )
}

export default CartItemCard