import React from 'react'

export const Header = () => {
    const listItem = ['Collections','Men','Women','About','Contact']
    const icon =['logo.svg','cart.svg','avatar.png']
  return (
    <>
    <div className='flex flex-row justify-between h-14 items-center mx-20 py-11 border-b-2 border-slate-200'>
        <div className='flex flex-row space-x-6 items-center'>
            <img className='size-1/5 pr-3' src={icon[0]} alt="" />

            <ul className='space-x-7'>
                {listItem.map(person => (<a className=' pb-8 font-thin hover:border-b-4 border-orange-500  duration-100 hover:font-bold hover:text-sm' href=''>{person}</a>))}
            </ul>
            
        </div>
        <div className='flex flex-row justify-end items-center space-x-6'>
            <button className='relative'>
                <img className='cursor-pointer ' src={icon[1]} alt="" />
                <span className='absolute -top-3 -right-3 bg-orange-400 w-5 rounded-full text-sm'>x</span>
            </button>
            
            <img className='size-1/4 cursor-pointer rounded-full border-2 hover:border-orange-500 duration-100' src={icon[2]} alt="" />
            
            
        </div> 
        <div className='hidden absolute top-20 right-10 bg-white  flex-col space-y-6 w-64 p-4 shadow-2xl rounded-2xl'>
            <h1 className='font-bold'>Cart</h1>
            <hr />
            <div>
                <img src="" alt="" />
                <p className=''>Fall limited edition Sneakers <br /></p>
            </div>
            <button className='p-2 font-bold rounded-xl bg-orange-500 hover:bg-orange-300'>Checkout</button>
        </div>
    </div>
    </>
  )
}
