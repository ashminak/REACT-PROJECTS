import React from 'react'
import Header from '../components/Header'
import { useLocation,useNavigate,useNavigation } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blog from '../components/Blog';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div className='flex flex-col w-full h-full gap-y-1 justify-center items-center mt-20'>
          <div  className='w-[670px] ' >
            <div className="relative mt-5 gap-3">
            <button onClick={() => navigation(-1)} className='rounded-md border-2 px-4 py-1 absolute left-0'>back</button>
            <h2 className="text-center font-bold text-2xl">Blogs On 
              <span>{category}</span>
            </h2>
        </div>
        <Blog/>
        <Pagination/>
        </div>

          </div>


    </div>
  )
}

export default CategoryPage