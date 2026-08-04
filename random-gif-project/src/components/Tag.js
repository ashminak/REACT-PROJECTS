import {useState } from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";


export default function Tag() {
    const[tag,setTag]=useState('car');
    const {gif,loading,fetchData}=useGif(tag);
  
 


  return <div className="bg-blue-400 w-1/2 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
    <h1 className="font-bold text-3xl mt-[15px] underline">RANDOM {tag} GIF</h1>
    {
      loading?(<Spinner/>):(<img src={gif} alt="alt" width="450" />)
    }
    <input onChange={(event) => setTag(event.target.value)} value={tag}
    className="w-10/12 bg-white text-2xl font-bold rounded-md py-2 mb-[1px] text-center"/>
    <button onClick={() => fetchData(tag)} className="w-10/12 bg-white text-2xl font-bold rounded-md py-2 mb-[20px]">Generate</button>
  </div>;
}
