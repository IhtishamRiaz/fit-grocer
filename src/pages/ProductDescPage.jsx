import React from 'react'
import BackIcon from '../assets/images/arrow-left.svg?react'
import SearchIcon from '../assets/images/search-icon.svg?react'

const ProductDescPage = () => {
   return (
      <div>
         <div className='bg-foreground'>
            <div className='flex justify-between'>
               <BackIcon />
               <SearchIcon />
            </div>
         </div>
      </div>
   )
}

export default ProductDescPage