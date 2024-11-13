import React from 'react'
import { useState } from 'react'

export const Home = () => {

    const[count,setcount] = useState(0)
    function plusClick(){
        return setcount(count+1)
    }
    function minusClick(){
        if(count == 0){
            return 0
        }
        return setcount(count-1)
    }
    const imageSmall = ['1.jpg','3.jpg','5.jpg','7.jpg']
    const imageLarge = ['2.jpg','4.jpg','6.jpg','8.jpg']
    const iconImage =['plus.svg','next.svg','minus.svg','menu.svg','delete.svg','close.svg','previous.svg']
  return (
    <>
        <div className='flex flex-row justify-center  h-auto '>
            <div className='flex flex-col items-center space-y-5 basis-2/5'>
                <div>
                    <img className='rounded-2xl' src={imageLarge[0]} alt="" />

                </div>
                <div className='flex flex-row items-center space-x-5 '>
                    {imageSmall.map(listImage =>(
                        <img className='rounded-2xl' src={listImage}/>
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <p>sneaker company</p>
                    <h1>fall limited edutuib <br />sneakers</h1>
                    <p>these love-profile sneakers are your perfect casulal wear <br />companein.featuring a durable rubber outer sole ,they'll <br /> withstand everything the weather can offer </p>
                    <p>$125 <span>50%</span></p>
                    <p>$250.00</p>
                </div>
                <div>
                    <div>
                        <button onClick={minusClick} ><img src={iconImage[2]} alt="" /></button>
                        <p>{count}</p>
                        <button onClick={plusClick}>
                            <img src={iconImage[0]} alt="" />
                        </button>
                    </div>
                    <div>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
