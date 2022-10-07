import {useContext} from 'react'
import {CountingContext} from "../../store/CountingProvider"
import Temp1 from "../../image/image-product-1-thumbnail.jpg" 
import Temp2 from "../../image/image-product-2-thumbnail.jpg" 
import Temp3 from "../../image/image-product-3-thumbnail.jpg" 
import Temp4 from "../../image/image-product-4-thumbnail.jpg"  
import {BsTrash} from "react-icons/bs"
import DynamiteBtn from '../UI/DynamiteBtn'

const Cart = ({toggle}) => {


  const DummyImage =[Temp1, Temp2, Temp3, Temp4]

  const {select,index,handleDelete} = useContext(CountingContext)

  const value = select * 125

  return (
    <div className={toggle ?'cart scale-y-1' : 'cart scale-y-0'}>
       <div className='border-b border-b-blue-300 p-5'>
            <h1 className='capitalize text-right lg:text-left '>cart</h1>
        </div>
        {
          select > 0 ? <>


          <div className='px-3 py-3 '>
            <div className='flex items-center justify-between space-x-2'>
              <div className='w-[50px]'>
                <img src={DummyImage[index]} className='object-contain w-full h-full' alt="temp1" />
              </div>
              <div>
                <p className='text-blue-300'>Fall Limited Edition Sneakers</p>
                <p className='text-left text-blue-300'>$125 x {select} = <span className='font-[700] text-black'>${value}.00</span></p>
              </div>
              <div>
                <button onClick={handleDelete}>
                  <BsTrash className='text-blue-300'/>
                </button>
              </div>
            </div>
            <div className='w-full flex justify-center my-5'>
              <DynamiteBtn onClick={() => {
                alert(`your total price was ${value}`)
              }} className={'w-full justify-center'}>
                Checkout
              </DynamiteBtn>
            </div>
          </div>


          </> : <>
        <div className='p-20'>
            <p className='text-blue-200 font-[700]'>Your cart is empty.</p>
        </div>
          </>
        }
    </div>
  )
}

export default Cart
