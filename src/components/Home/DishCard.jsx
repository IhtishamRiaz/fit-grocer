import React from 'react'
import Heart from '../../assets/images/heart-dish.svg?react'
import HeartSolid from '../../assets/images/heart-dish-active.svg?react'

const DishCard = ({ id, name, img, price, isFavourite }) => {
   return (
      <div className='rounded-lg bg-card basis-[45%] sm:basis-auto max-w-[180px] overflow-hidden shadow-sm'>
         {/* Card Image */}
         <div>
            <img className='object-cover w-full aspect-square' src={img} alt={name} />
         </div>
         {/* Card Content */}
         <div className='p-3 text-sm font-medium'>
            <p className='leading-5 line-clamp-2'>{name}</p>
            <div className='flex items-center justify-between mt-2'>
               <p><span className='text-primary'>$ </span>{price}</p>
               {
                  isFavourite ? <HeartSolid /> : <Heart />
               }
            </div>
         </div>
      </div>
   )
}

export default DishCard