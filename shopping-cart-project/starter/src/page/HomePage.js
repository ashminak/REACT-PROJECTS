import React, { useState } from 'react';
import { useEffect } from 'react';
import Spinner from '../component/Spinner';
import Product from '../component/Product';

const HomePage = () => {
 const API_URL = "https://fakestoreapi.com/products";
const[loading,setLoading]=useState(false);
const[posts,setPosts]=useState([]);

async function fetchProductData() {
 
  try{
    setLoading(true);
    const result = await fetch(API_URL);
    const data = await result.json();
    setPosts(data);
    console.log(data)
    setLoading(false);

  }catch(error){
    console.log("Unable to fetch product data.")
    setPosts([]);
    setLoading(false);
  }
  
}

 useEffect(()=>{
  fetchProductData();
},[]);
  return (
    <div >
        {
          loading?
        <div className="fixed inset-0 flex justify-center items-center">(<Spinner/>)</div>: 
         posts.length>0 ?
         (<div className='w-[1500px]  h-full flex flex-wrap justify-center items-center mx-auto'>
          {
           posts.map((post)=>(
      
            <Product key={post.id} post={post}/>
          ))
          }
          </div>):
        (<p>No Post Found</p>)
         
        }
    </div>
  )
}

export default HomePage