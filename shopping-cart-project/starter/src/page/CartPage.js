import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from "../component/CartItem";
import {add,remove} from "../redux/slices/cartSlice";
import {Link} from "react-router-dom";

const CartPage = () => {
 const {cart}=useSelector((state)=>state);
 const[totalAmount,setTotalAmount]=useState(0)

 useEffect(()=>{
  setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
 },[cart])
  
  return (
    <div >
    {
          cart.length>0 ?
         ( <div className='flex w-[1500px] justify-center items-start mx-auto'>
            <div className=''>
           
           {
            ( cart.map((item,index)=>{
           return <CartItem key={item.id} item={item} itemIndex={index}/>
          }))

           }
           <hr class="border-stone-500 dark:border-neutral-500"/>
          </div>
        <div className='w-[650px] flex  flex-col mt-2'>
      
          <p className='font-bold text-4xl text-green-800 py-2 mt-6'>YOUR CART</p>
          <h1 className='font-bold text-8xl text-green-700'>SUMMARY</h1>
          <p className='py-10'>
            <span className='font-bold text-3xl py-4'>Total Items:{cart.length}</span>
          </p>
          <div className='flex flex-col'>
            <p className='font-bold text-2xl py-5'>Total Amount: ${totalAmount}</p>
            
            <button className=' bg-green-700 text-white  rounded-full px-15 py-2 font-bold text-3xl'>Checkout Now</button>
          </div>

        </div>
    
      </div>)  

        :
          (<div className='flex flex-col justify-center items-center h-[calc(100vh-90px)]'>
            <h1 className='font-bold text-5xl text-green-600'> Cart Empty</h1>
            <Link to={"/"}>
             <button className='w-[300px] bg-green-600  text-white text-4xl font-bold mt-7 h-20'>SHOW NOW</button>
            </Link>
           
            </div>)

          }
    </div>
  )
}

export default CartPage