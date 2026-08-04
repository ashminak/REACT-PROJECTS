import React from 'react'
import { NavLink } from 'react-router-dom';
import { AppContext} from '../context/AppContext';
import { useContext } from 'react';

const BlogDetailsCard = ({post}) => {
     
  return (
    <div>
        <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-sm text-2xl'>{post.title}</span>
        </NavLink>
        <p>
            By
            <span className='italic'>{post.author}</span>
            On{" "}
            <NavLink to={`/categories/${post.category.replaceAll("-"," ")}`}  className='font-bold'>{post.category}</NavLink>
        </p>
         <p className='mb-4'>Posted On <span>{post.date}</span></p>
         <p className='mb-3'>{post.content}</p>
         <div className='text-sm mb-5'>
             {post.tags.map( (tag,index) => {
             return <NavLink className='underline text-blue-600 mr-2'
             key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span>{`#${tag}`}</span>
             </NavLink>
            })
        }
        </div>
    </div>
  )
}

export default BlogDetailsCard