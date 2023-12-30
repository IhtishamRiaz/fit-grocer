import React from 'react'
import { userInfo } from '../../Data/MockupData'

const items = [
   '1x Green Salad',
   '2x Fresh Vegetable',
   '1x Mixed Salad',
   '3x Grilled Steak',
   '1x Vegan Cake',
];

const OrderDetails = () => {

   const mid = Math.ceil(items.length / 2);
   const firstColumnItems = items.slice(0, mid);
   const secondColumnItems = items.slice(mid);

   return (
      <div>
         <h2 className='font-semibold text-2xl mb-4'>Order details</h2>
         <div className="flex gap-6 text-muted">
            <div>
               {firstColumnItems.map((item, index) => (
                  <p key={index}>{item}</p>
               ))}
            </div>
            <div>
               {secondColumnItems.map((item, index) => (
                  <p key={index}>{item}</p>
               ))}
            </div>
         </div>
      </div>
   )
}

export default OrderDetails