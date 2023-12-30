import React from 'react'
import CategoryItem from './CategoryItem'

const Categories = () => {
   return (
      <div className='mt-12'>
         <div className='flex items-center justify-between font-medium'>
            <p>Categories</p>
            <p className='text-primary'>See all</p>
         </div>
         <CategoryItem />
      </div>
   )
}

export default Categories