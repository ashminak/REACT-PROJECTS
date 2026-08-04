import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import BlogDetailsCard from './BlogDetailsCard';


const Blog = () => {
    const{posts,loading}=useContext(AppContext);

  return (<div  className='w-[11/12] max-w-[670px] mt-[60px] mb-[90px]'>
        {
            loading ?
            <div className="fixed inset-0 flex justify-center items-center">(<Spinner/>)</div>:
            (
                posts.length === 0 ?

                (<div>
                <p>No Post Found</p>    
                </div>) :
                (posts.map((post) => (
              
                    <BlogDetailsCard key={post.id} post={post}/>
                
            ))))

        }
    </div>)

 
}

export default Blog;