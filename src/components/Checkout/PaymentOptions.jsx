import React from 'react'
import DebitCardLogo from '../../assets/images/master-logo.svg?react'
import PayPalLogo from '../../assets/images/paypal-logo.svg?react'
import PayoneerLogo from '../../assets/images/payoneer-logo.svg?react'

const PaymentOptions = () => {
   return (
      <div>
         <h2 className='font-semibold text-2xl mb-6'>Payment</h2>
         <div className='bg-card px-9 rounded-lg divide-y'>

            <label className='flex items-center justify-between cursor-pointer py-2'>
               <div className='flex items-center gap-4'>
                  <DebitCardLogo />
                  Debit/Credit card
               </div>
               <input type="radio" name="payment" value="card" className='accent-current' />
            </label>

            <label className='flex items-center justify-between cursor-pointer py-2'>
               <div className='flex items-center gap-4'>
                  <DebitCardLogo />
                  PayPal
               </div>
               <input type="radio" name="payment" value="PayPal" className='accent-current w-[13px] h-[13px]' />
            </label>

            <label className='flex items-center justify-between cursor-pointer py-2'>
               <div className='flex items-center gap-4'>
                  <DebitCardLogo />
                  Payoneer
               </div>
               <input type="radio" name="payment" value="payoneer" className='accent-current' />
            </label>

         </div>
      </div>
   )
}

export default PaymentOptions