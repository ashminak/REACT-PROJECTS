import React from 'react';
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div className='w-full h-[90px] bg-slate-950 flex items-center justify-center mb-6'>
        <nav className=' flex justify-between w-[1500px] '>
          <NavLink to="/">
                <div className='px-2'><img src="shop1.png" alt='shop1' width={150}/></div>
          </NavLink>
  
            
            <div className='flex mt-16 gap-x-5'>
                      <NavLink to="/">
                           <p className=' text-white font-bold text-2xl px-5'>Home</p>
                      </NavLink >
                      <NavLink to="/cart" className="relative">
                            <FaShoppingCart className='text-white h-8 w-8'/>
                            {
                              cart.length > 0 &&
                               <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center
                               rounded-full animate-bounce text-white'>{cart.length}</span>
                            }
                           
                      </NavLink>
               
                
            </div>
        </nav>
    </div>
  )
}

export default Navbar