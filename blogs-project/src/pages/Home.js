import React from 'react';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Pagination from '../components/Pagination';

const Home = () => {
  return (
    <div className="flex flex-col w-full h-full gap-y-1 justify-center items-center">
       <Header/>
       <Blog/>
       <Pagination/>
   </div>
  )
}

export default Home