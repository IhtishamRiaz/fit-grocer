import React from 'react'
import { userInfo } from '../../Data/MockupData'

const DeliveryDetails = () => {
   return (
      <div>
         <h2 className='font-semibold text-2xl mb-4'>Delivery details</h2>
         <div className='text-muted'>
            <p>{userInfo?.address?.line1}</p>
            <p>{userInfo?.address?.line2}</p>
            <p>{userInfo?.number}</p>
         </div>
      </div>
   )
}

export default DeliveryDetails