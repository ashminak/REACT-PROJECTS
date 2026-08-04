import React, { useContext } from 'react';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Blog from '../components/Blog';


const TagPage = () => {
     const navigation = useNavigate();
     const location = useLocation();
     const tag = location.pathname.split("/").at(-1);
   
    


  return (
    <div>
        <Header/>
        <div className='flex flex-col w-full h-full gap-y-1 justify-center items-center mt-20'>
          <div className='w-[670px] '>
                <div className="relative mt-5">
            <button onClick={()=>(navigation(-1))} className='rounded-md border-2 px-4 py-1 absolute left-0'>back</button>
            <h1 className="text-center font-bold text-2xl">Blogs Tagged <span>#{tag}</span> </h1>
            
        </div>
        <Blog/>
        <Pagination/>

          </div>
          
        </div>

    </div>
  )
}

export default TagPage;