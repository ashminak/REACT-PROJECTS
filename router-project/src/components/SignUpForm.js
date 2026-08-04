import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from 'react-icons/ai'
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignUpForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({firstName:'',lastName:'',email:'',createPassword:'',confirmPassword:''})
    const[showPassword,setShowPassword]=useState(false);
     const[showConfirmPassword,setShowConfirmPassword]=useState(false);
     
   const[accountType,setAccountType]=useState("student");

     const navigate=useNavigate();
    
    function changeHandler(event){
    
        setFormData( (prevData) =>(
        {
            ...prevData,
            [event.target.name]:event.target.value
        }

        ) )

    }

    function submitHandler(event){
     event.preventDefault();
     if(formData.createPassword !=formData.confirmPassword){
        toast.error("Passwords do not match");
        return;
     }
     setIsLoggedIn(true);
     toast.success("Account Created");
     const accountData={
        ...formData
     };

   const finalData={
    ...accountData,
    accountType
   }
   console.log("printing form accumulated data ")
   console.log(finalData);
      navigate("/dashboard");
     
    
   }
 
 
  return (
    <div>
         <div
        className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>

            <button
            className={`${accountType === "student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>
        <form onSubmit={submitHandler} className='w-full'>
            <div className='flex gap-x-4 w-full gap-y-4'> 
            <label className='w-full'>
                <p className='text-[0.857rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='
                text-pink-200'>*</sup></p>
                <input 
                type='text'
                placeholder='Enter first name'
                onChange={changeHandler}
                name='firstName'
                value={formData.firstName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full py-[12px] px-2'
                />
            </label>
            
            <label className='w-full'>
                <p className='text-[0.857rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='
                text-pink-200'>*</sup></p>
                <input 
                type='text'
                placeholder='Enter last name'
                onChange={changeHandler}
                name='lastName'
                value={formData.lastName}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full py-[12px] px-2'
                />
               
            </label>

            </div>
            <div className='mt-[10px]'>
          <label >
                <p className='text-[0.857rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email<sup className='
                text-pink-200'>*</sup></p>
                <input 
                type='email'
                placeholder='Enter email'
                onChange={changeHandler}
                name='email'
                value={formData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full py-[12px] px-2'
                />
            </label>
            </div>
           


            <div className='flex  gap-3 mt-[10px]'>

            <label  className='w-full relative'>
                <p className='text-[0.857rem] text-richblack-5 mb-1  leading-[1.375rem]'>Create Password<sup className='
                text-pink-200'>*</sup></p>
                <input 
                type={showPassword?('text'):('password')}
                placeholder='Enter password'
                onChange={changeHandler}
                name='createPassword'
                value={formData.createPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full py-[12px] px-2'
                />
                <span onClick={()=>setShowPassword((prev)=>!prev)}
                    className='absolute right-3 top-[38px] cursor-pointer'>
                   {showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
            <label className='w-full relative'>
                <p className='text-[0.857rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='
                text-pink-200'>*</sup></p>
                <input 
                type={showConfirmPassword?('text'):('password')}
                placeholder='Enter password'
                onChange={changeHandler}
                name='confirmPassword'
                value={formData.confirmPassword}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full py-[12px] px-2'
                />
                <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}
                    className='absolute right-3 top-[38px] cursor-pointer'>
                   {showConfirmPassword?(<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>

            </div>
           

            <button  className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full'>Create Account</button>

            
        </form>
    </div>
  )
}

export default SignUpForm