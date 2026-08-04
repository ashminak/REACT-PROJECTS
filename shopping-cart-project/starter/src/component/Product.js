import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {toast} from "react-hot-toast";
import {add,remove} from "../redux/slices/cartSlice";

const Product = ({post}) => {
 const {cart}=useSelector((state)=>state);
 const dispatch = useDispatch();

 function addToCart(){
     dispatch(add(post));
     toast.success("Item added to Cart")
 }
 function removeFromCart(){
     dispatch(remove(post.id));
     toast.error("Item removed from Cart");

 }

  return (
    <div  className='  px-3 py-4'>
        <div className='w-[350px] h-[450px] flex flex-col border shadow-lg rounded-lg justify-center items-center' >
         <div className='w-[222px] py-[-6]'>
             
             <h2 className='font-bold text-2xl truncate py-6 '  title={post.title}>{post.title}</h2>
        </div>
        <div className='w-[222px] py-2'>
             <h1 className='text-sm truncate text-gray-700 ' title={post.description}>{post.description}</h1>
        </div>
        <div className='py-4' >
            <img src={post.image} className='h-[200px]' />
        </div>
        <div className='flex justify-between w-[300px] py-[3px]'>
        <div>
        <p className='text-green-600 font-bold text-2xl'>${post.price}</p>
       </div>
       {
          cart.some((p)=>p.id==post.id)?
          (<button onClick={removeFromCart} className=' bg-white text-black border-4 border-black rounded-full px-7 py-2 font-bold text-1xl' >Remove Item</button>) :
          (<button onClick={addToCart} className=' bg-white text-black border-4 border-black rounded-full px-7 py-2 font-bold text-1xl'>Add to Cart</button>)
       }

        </div>
       

        </div>
        
    </div>
  )
}

export default Product