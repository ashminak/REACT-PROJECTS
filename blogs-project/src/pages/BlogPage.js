import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import Header from '../components/Header';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Spinner from '../components/Spinner';
import BlogDetailsCard from '../components/BlogDetailsCard';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    const[blog,setBlog] =useState(null);
    const[relatedBlogs,setRelatedBlogs]=useState([]);
    const navigation = useNavigate();
    const location =useLocation();
    const {loading,setLoading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

        async function fetchRelatedData() {
        setLoading(true)
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);

            console.log("Blog ID:", blogId);
            console.log("URL:", url);
        }catch(error){
            console.log("Error in fetching data.")
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
        
     }
     useEffect(()=>{
        if(blogId){
             fetchRelatedData();
        }
       
     },[location.pathname]);
  return (
    <div>
        <Header/>
        <div  className='flex flex-col w-full h-full gap-y-1 justify-center items-center'>
        <div className='w-[670px]'>
        <div className='mt-20'><button className='rounded-md border-2 px-4 py-1 mb-2' onClick={() => navigation(-1)}>back</button>
        </div>
        {
            loading ?
            (<Spinner/>) :
            (
                blog?
                (<div>
                    <BlogDetailsCard post={blog}/>
                    <h1 className='font-bold text-2xl mb-3'>Related Blogs</h1>
                    {
                        relatedBlogs.map( (post) => (
                            <div key={post.id}>
                            <BlogDetailsCard post={post}/>
                            </div>
                        ) )
                    }
                </div>):
                (<div>
                    <p>No Blog Found</p>
                </div>)
            )
        }
        
   



        </div>
       
        </div>
        
    </div>
  )
}

export default BlogPage