
import './App.css';
import { useState } from 'react';

function App() {
  const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",country:"",street:"",city:"",state:"",pin:"",isVisible:true,
    isVisible1:true,isVisible2:true,mode:""
  });

  function changeHandler(event){
    const{name,type,checked,value}=event.target;

    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Printing")
    console.log("formdata",formData)
  }
  return (
    <div className='flex justify-center'>
          <div  className="flex justify-center w-[700px] border border-gray-200 ">
              <form onSubmit={submitHandler} className='w-[600px] flex flex-col gap-2 '>
                <div className='gap-2'>
                  <label className='font-medium text-sm'>First Name</label>
                <br/>
                <input className='w-full h-12 rounded-md border border-black'
                type='text'
                placeholder='Ashmina'
                name='firstName'
                value={formData.firstName}
                onChange={changeHandler}/>

                <br/>
                 <label className='font-medium text-sm'>Second Name</label>
                <br/>
                <input  className='w-full h-12 rounded-md border border-black'
                type='text'
                placeholder='Khatun'
                name='lastName'
                value={formData.lastName}
                onChange={changeHandler}/>

                 <br/>
                 <label className='font-medium text-sm'>Email Address</label>
                <br/>
                <input className='w-full h-12 rounded-md border border-black'
                type='email'
                placeholder='ashminakhatun@gmail.com'
                name='email'
                value={formData.email}
                onChange={changeHandler}/>

                <br/>
                <label className='font-medium text-sm'>Country</label>
                <br/>
                <input  className='w-full h-12 rounded-md border border-black'
                type='text'
                placeholder='India'
                name='country'
                value={formData.country}
                onChange={changeHandler}/>

                <br/>
                <label className='font-medium text-sm'>Street Address</label>
                <br/>
                <input className='w-full h-12 rounded-md border border-black'
                type='text'
                placeholder='1234 Main st'
                name='street'
                value={formData.street}
                onChange={changeHandler}/>

                <br/>
                <label className='font-medium text-sm'>City</label>
                <br/>
                <input   className='w-full h-12 rounded-md border border-black'
                type='text'
                placeholder='Kolkata'
                name='city'
                value={formData.city}
                onChange={changeHandler}/>

                <br/>
                <label className='font-medium text-sm'>State/Province</label>
                <br/>
                <input className='w-full h-12 rounded-md border border-black'
                type='text'
                placeholder='West Bengal'
                name='state'
                value={formData.state}
                onChange={changeHandler}/>

                <br/>
                <label className='font-medium text-sm'>ZIP/Postal Code</label>
                <br/>
                <input   className='w-full h-12 rounded-md border border-black'
                type='text'
                placeholder='711303'
                name='pin'
                value={formData.pin}
                onChange={changeHandler}/>
                
                </div>
                
                <div className='font-medium'>By Email</div> 
                <div className='flex flex-start gap-3' >
                <input  className='w-4 h-4 mt-2'
                type='checkbox'
                onChange={changeHandler}
                name='isVisible'
                id='isVisible'
                checked={formData.isVisible}/>
                <div className='flex flex-col'>
                    <label htmlFor='isVisible' className='font-medium'> Comments</label>
                 
                <div className='text-gray-500'>
                <small> Get notified when someone posts a comment on a posting.</small>
                </div>
                </div>
              
                </div>

                <div className='flex flex-start gap-3'>
                <input className='w-4 h-4 mt-2'
                type='checkbox'
                onChange={changeHandler}
                name='isVisible1'
                id='isVisible1'
                checked={formData.isVisible1}/>
                <div className='flex flex-col'>
                  <label htmlFor='isVisible1' className='font-medium'>Candidates</label>
                 
                <div>
                <small className='text-gray-500'>Get notified when a candidate applies for a job. </small>
                </div>
                </div>
                 
                  </div>
              

                <div className='flex flex-start gap-3'>
                <input   className='w-4 h-4 mt-2'
                type='checkbox'
                onChange={changeHandler}
                name='isVisible2'
                id='isVisible2'
                checked={formData.isVisible2}/>
                <div  className='flex flex-col'>
                <label htmlFor='isVisible2' className='font-medium'>offers</label>
                <div>
                <small className='text-gray-500'>Get notified when a candidate accept or reject an offer.</small>
                </div>
                </div>
           
                </div>
                <div>
                  <p className='font-medium'>Push Notifications</p>
                  <p className='text-gray-500 text-sm'>These are delivered via SMS to your mobile Phone.</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-center gap-3'>
                  <input  
                  type='radio'
                  onChange={changeHandler}
                  name='mode'
                  id='everything'
                  value="everything"
                  checked={formData.mode ===  "everything"}/>
                  <label htmlFor='everything' className='font-medium'>Everything</label>
                  </div>

                  <div className='flex items-center gap-3'>
                  <input 
                  type='radio'
                  onChange={changeHandler}
                  name='mode'
                  id='sameAsEmail'
                  value="sameAsEmail"
                  checked={formData.mode ===  "sameAsEmail"}/>
                  <label htmlFor='sameAsEmail' className='font-medium'>Same As Email</label>
                  </div>

                   <div className='flex items-center gap-3'>
                  <input 
                  type='radio'
                  onChange={changeHandler}
                  name='mode'
                  id='noNotification'
                  value="noNotification"
                  checked={formData.mode ===  "noNotification"}/>
                  <label htmlFor='noNotification' className='font-medium'>No Push Notification</label>
                  </div>
                 
                </div>
                <div >
            
<button
  className="cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
>
  <div className="relative overflow-hidden">
    <p
      className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      Button
    </p>
    <p
      className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
    >
      Button
    </p>
  </div>
</button>

                </div>
              
              
              </form>
            </div>
    </div>
  );
}

export default App;
