import React from 'react';
import toast from 'react-hot-toast';
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/cartSlice';

const CartItem = ({item,itemIndex}) => {
  const dispatch =useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed from Cart")
  }
  return (
    <div className='flex w-[850px] gap-20'>
      <div className='h-[300px] w-[200px] py-8'>
        <img src={item.image}/>
      </div>
    
      <div className='py-6 w-[500px] '>
        <div className='font-bold text-2xl'>{item.title}</div>
        <div className='text-xl truncate  line-clamp-2 text-gray-700 py-7 ' >{item.description}</div>
        <div className='flex justify-between py-10'>
          <p className='text-green-600 font-bold text-2xl'>${item.price}</p>
          <div onClick={removeFromCart} className="w-12 h-12 rounded-full mr-9 bg-pink-200 flex items-center justify-center hover:bg-pink-300 transition duration-300">
            <MdDelete className="text-2xl" />
            
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CartItem