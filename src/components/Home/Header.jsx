import React from 'react'
import HandWave from '../../assets/images/hand-wave.svg?react'
import SearchIcon from '../../assets/images/search-icon.svg?react'
import { calculateCurrentMeal } from '../../lib/utils'
import { useGlobalStore } from '../../stores/globalStore'

const Header = () => {
   const currentMeal = calculateCurrentMeal()
   const userInfo = useGlobalStore((state) => state.userInfo)

   return (
      <div className='flex justify-between'>
         <div>
            <h1 className='flex items-center gap-2 text-2xl font-semibold'>
               Hey {userInfo?.name}
               <HandWave />
            </h1>
            <p className='text-sm'>{`It’s ${currentMeal} time!`}</p>
         </div>
         <SearchIcon />
      </div>
   )
}

export default Header