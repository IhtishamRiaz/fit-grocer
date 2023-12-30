import React from 'react'
import DishCard from './DishCard'
import { allDishes } from '../../Data/MockupData'

const RecommendedItems = () => {
   return (
      <div className='mt-10'>
         <div className='flex items-center justify-between font-medium'>
            <p>Recommended Items</p>
            <p className='text-primary'>Filter</p>
         </div>

         {/* Recommended Items Container */}
         <div className='flex flex-wrap gap-5 mt-5'>
            {
               allDishes?.map(({ id, name, img, price, isFavourite }) => (
                  <DishCard key={id} id={id} name={name} img={img} price={price} isFavourite={isFavourite} />
               ))
            }
         </div>
      </div>
   )
}

export default RecommendedItems