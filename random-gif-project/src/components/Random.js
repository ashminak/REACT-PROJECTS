
import Spinner from "./Spinner";
import useGif from "./useGif";

export default function Random() {

  const {gif,loading,fetchData}=useGif();
 

  

  return <div className="bg-green-400 w-1/2 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] ">
    <h1 className="font-bold text-3xl mt-[15px] underline">A RANDOM GIF</h1>
    {
      loading?(<Spinner/>):(<img src={gif} alt="alt" width="450" />)
    }
    
    <button onClick={() => fetchData()} className="w-10/12 bg-white text-2xl font-bold rounded-md py-2 mb-[20px]">Generate</button>
  </div>;
}
