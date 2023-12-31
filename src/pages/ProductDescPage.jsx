import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import Heart from '../assets/images/prod-desc-heart.svg?react'
import HeartSolid from '../assets/images/prod-desc-heart-active.svg?react'
import RatingIcon from '../assets/images/Star.svg?react'

const ProductDescPage = () => {
   return (
      <div className='min-h-screen'>
         <div className='bg-foreground pt-12 pb-6 rounded-b-[50px]'>
            {/* Header */}
            <div className='flex justify-between items-center pb-8 px-7'>
               <BackIcon />
               <Heart />
            </div>
            {/* Product Info */}
            <div className='px-7'>
               <h1 className='text-2xl leading-9 font-semibold'>Grilled Beef Steak with Mushroom sauce</h1>
               <h3 className='text-muted text-lg mb-3 mt-2'>By Steak house</h3>
               <p className='flex gap-1.5'><RatingIcon />4.5</p>
            </div>
            {/* Product Image and Quantity*/}
            <div className='flex items-center pl-7'>
               <div className='basis-[30%] flex-shrink-0'>
                  Prod Quantity
               </div>
               <div className='flex-grow h-[350px] bg-no-repeat drop-shadow-2xl' style={{ backgroundImage: `url(/images/mushroom-sauce-steak-plate.png)` }}>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductDescPage