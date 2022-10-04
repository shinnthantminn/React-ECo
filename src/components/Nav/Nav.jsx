import { useState } from "react"
import {AiOutlineShoppingCart} from "react-icons/ai"
import Avater from "../../image/image-avatar.png"
import Cart from "./Cart"

const Nav = () => {

  const [show ,setShow] = useState(false)

  const DUMMYMENU = ["Collections", "Men","Womens", "About","Contact"]

  const handleToggle = () => setShow(pre => !pre)

  return (
    <div className="flex justify-between items-center border-b border-b-blue-300">
       <div className="space-x-8 flex items-center">
        <div>
            <h1 className="text-2xl font-[700]">sneakers</h1>
          </div>
          <div>
            <ul className="flex space-x-6">
              {DUMMYMENU.map((i,index) => <li className="text-[12px] text-blue-200 font-[400] cursor-pointer py-8 after:w-full after:h-[2px] relative after:absolute after:bottom-0 after:left-0 after:bg-orange-100 after:scale-x-0 hover:after:scale-x-[1] after:duration-500" key={index}>{i}</li> )}
            </ul>
          </div>
       </div>

       <div className="flex items-center space-x-5">

        <button className="relative" onClick={handleToggle}>
          <AiOutlineShoppingCart/>
          <Cart toggle={show}/>
        </button>
        <div className="w-[30px] h-[30px] rounded-full duration-500 hover:ring-1 hover:ring-orange-100">
          <img src={Avater} className="object-cover" alt="avater" />
        </div>
       </div>
    </div>
  )
}

export default Nav