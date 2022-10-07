import img1 from "../../image/image-product-1.jpg" 
import img2 from "../../image/image-product-2.jpg" 
import img3 from "../../image/image-product-3.jpg" 
import img4 from "../../image/image-product-4.jpg" 
import Temp1 from "../../image/image-product-1-thumbnail.jpg" 
import Temp2 from "../../image/image-product-2-thumbnail.jpg" 
import Temp3 from "../../image/image-product-3-thumbnail.jpg" 
import Temp4 from "../../image/image-product-4-thumbnail.jpg" 
import { useState,useContext } from "react"

import {CountingContext} from "../../store/CountingProvider"

const ImageContainer = () => {
    const Temp = [Temp1, Temp2, Temp3, Temp4];
    const Image = [img1, img2, img3, img4];

    const {handleIndexChange,index} = useContext(CountingContext)

    const [image,setImage] = useState(Image[index])

    const handleImageChange = (index) => {
        setImage(Image[index])
        handleIndexChange(index)
    }

  return (
    <div className="w-[50%] flex justify-center items-center">
        <div className="w-[50%] space-y-5">
            <div className="w-full rounded">
                <img src={image} className="w-full rounded h-full object-contain" alt="" />
            </div>

            <div className="flex space-x-3">
                {Temp.map((i,index) => <button onClick={handleImageChange.bind(null,index)} className="w-[100px] rounded active:ring-1 duration-300 active:ring-orange-100" key={index}>
                    <img src={i} className='rounded duration-300 hover:opacity-[0.5]' alt="" />
                </button>)}
            </div>
        </div>
    </div>
  )
}

export default ImageContainer