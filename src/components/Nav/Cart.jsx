import React from 'react'

const Cart = ({toggle}) => {
  return (
    <div className={toggle ?'cart scale-y-1' : 'cart scale-y-0'}>
        <div className='border-b border-b-blue-300 p-5'>
            <h1 className='capitalize text-right lg:text-left '>cart</h1>
        </div>
        <div className='p-20'>
            <p className='text-blue-200 font-[700]'>Your cart is empty.</p>
        </div>
    </div>
  )
}

export default Cart
