import React from 'react'
import CategoryItem from './CategoryItem'
import { allCategories } from '../../Data/MockupData'
import useEmblaCarousel from 'embla-carousel-react'

const Categories = () => {

   const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: 'trimSnaps', dragFree: true })

   return (
      <div className='mt-12'>
         <div className='flex items-center justify-between font-medium'>
            <p>Categories</p>
            <p className='text-primary'>See all</p>
         </div>

         {/* Categiry Slider */}
         <div className='overflow-hidden [max-width:calc(100vw-60px)] mt-5' ref={emblaRef}>
            <div className='flex gap-4'>
               {
                  allCategories?.map(({ id, name, img, color }) => {
                     return (
                        <div key={id} className='flex-shrink-0 min-w-0'>
                           <CategoryItem name={name} img={img} color={color} />
                        </div>
                     )
                  })
               }
            </div>
         </div>
      </div>
   )
}

export default Categories