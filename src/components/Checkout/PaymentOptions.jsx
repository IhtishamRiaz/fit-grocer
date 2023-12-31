import React from 'react'
import DebitCardLogo from '../../assets/images/master-logo.svg'
import PayPalLogo from '../../assets/images/paypal-logo.svg'
import PayoneerLogo from '../../assets/images/payoneer-logo.svg'

const PaymentOptions = () => {
   return (
      <div>
         <h2 className='font-semibold text-2xl mb-6'>Payment</h2>
         <div className='bg-card px-9 rounded-lg divide-y'>

            <label className='flex items-center justify-between cursor-pointer py-2.5'>
               <div className='flex items-center gap-4'>
                  <img src={DebitCardLogo} />
                  Debit/Credit card
               </div>
               <input type="radio" name="payment" value="card" className='hidden peer' />
               <span className='block w-[22px] h-[22px] rounded-full border border-[#D9D9D9] peer-checked:border-black after:content-[""] after:w-[14px] after:h-[14px] after:rounded-full after:bg-black relative after:absolute after:inset-[3px] peer-checked:after:scale-100 after:scale-0 transition-all after:transition-all' />
            </label>

            <label className='flex items-center justify-between cursor-pointer py-2.5'>
               <div className='flex items-center gap-4'>
                  <img src={PayPalLogo} />
                  PayPal
               </div>
               <input type="radio" name="payment" value="PayPal" className='hidden peer' />
               <span className='block w-[22px] h-[22px] rounded-full border border-[#D9D9D9] peer-checked:border-black after:content-[""] after:w-[14px] after:h-[14px] after:rounded-full after:bg-black relative after:absolute after:inset-[3px] peer-checked:after:scale-100 after:scale-0 transition-all after:transition-all' />
            </label>

            <label className='flex items-center justify-between cursor-pointer py-2.5'>
               <div className='flex items-center gap-4'>
                  <img src={PayoneerLogo} />
                  Payoneer
               </div>
               <input type="radio" name="payment" value="payoneer" className='hidden peer' />
               <span className='block w-[22px] h-[22px] rounded-full border border-[#D9D9D9] peer-checked:border-black after:content-[""] after:w-[14px] after:h-[14px] after:rounded-full after:bg-black relative after:absolute after:inset-[3px] peer-checked:after:scale-100 after:scale-0 transition-all after:transition-all' />
            </label>

         </div>
      </div>
   )
}

export default PaymentOptions