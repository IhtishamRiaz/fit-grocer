import React from 'react'
import DishCard from './DishCard'

const RecommendedItems = () => {
   return (
      <div className='mt-10'>
         <div className='flex items-center justify-between font-medium'>
            <p>Recommended Items</p>
            <p className='text-primary'>Filter</p>
         </div>

         {/* Recommended Items Container */}
         <div className='flex gap-6 mt-5'>
            <DishCard />
            <DishCard />
         </div>
      </div>
   )
}

export default RecommendedItems