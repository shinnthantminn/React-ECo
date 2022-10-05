import {FaPlus,FaMinus} from "react-icons/fa"
import DynamiteBtn from "../UI/DynamiteBtn"
import { useState } from "react"

import {AiOutlineShoppingCart} from "react-icons/ai"

const TextContainer = () => {
    const [count,setCount] = useState(0);

    const handleCounting = (type) => type ? setCount(pre => pre + 1) : count > 0 && setCount(pre => pre - 1)

    const handleChange = (e) => {
        setCount(+e.target.value)
    }
    

  return (
    <div className="w-[50%]">
       <div className="w-[80%] space-y-3">
        <div>
           <p className="uppercase text-[10px] font-[700] text-orange-100 tracking-widest">sneaker company</p>
        </div>
            <div>
                <h1 className="text-4xl font-[700] !mb-5">
                    Fall Limited Edition Snekers
                </h1>
            </div>
            <div>
                <p className="text-sm text-blue-300 font-[400]">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                </p>
            </div>


            {/* Price */}

            <div className="!my-5">

                <div className="flex items-center space-x-4">
                    <p className="text-2xl font-bold">$125.00</p>
                    <div className="px-1 rounded bg-orange-200">
                        <p className="text-orange-100 text-[12px]">50%</p>
                    </div>
                </div>
                
                <div>
                    <p className="text-blue-300 text-[12px] font-bold line-through">$250.00</p>
                </div>
            </div>

            {/* Button */}

            <div className="flex items-center space-x-6">


                <div className="bg-blue-400 flex rounded-lg items-center px-2 py-3">
                    <button onClick={handleCounting.bind(null,false)}>
                        <FaMinus  className="text-orange-100"/>
                    </button>
                        <input value={count} onChange={handleChange} className="bg-blue-400 text-center w-[80px] font-[700] outline-none appearance-none" type="number" />
                    <button onClick={handleCounting.bind(null,true)}>
                        <FaPlus className="text-orange-100"/>
                    </button>
                </div>


                <div>
                    <DynamiteBtn>
                       <AiOutlineShoppingCart/>
                        <p>Add to cart</p>
                    </DynamiteBtn>
                </div>
            </div>
       </div>
    </div>
  )
}

export default TextContainer