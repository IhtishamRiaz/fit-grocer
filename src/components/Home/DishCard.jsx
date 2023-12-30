import React from 'react'
import Favourite from '../../assets/images/heart-dish.svg?react'

const DishCard = () => {
   return (
      <div className='rounded-lg bg-card'>
         {/* Card Content */}
         <div className='p-3 text-sm font-medium'>
            <p className='leading-5 line-clamp-2'>Green salad with mashed potatots</p>
            <div className='flex items-center justify-between mt-2'>
               <p><span className='text-primary'>$ </span>12.22</p>
               <Favourite />
            </div>
         </div>
      </div>
   )
}

export default DishCard