import { useState } from "react";
import "./App.css";

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return (
  <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#344151]">
    <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>
    <div className="bg-white flex justify-center rounded-sm  py-3 gap-12 text-[#344151] text-[25px]  ">
      <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
        -
      </button>
      <div className="font-bold text-5xl gap-12">
        {count}
      </div>
      <button onClick={increaseHandler}  className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
        +
      </button>
    </div>
    <button onClick={resetHandler} className="bg-[#0398d4] text-white text-lg rounded-sm px-5 py-2">Reset</button>
  </div>
  );
}

export default App;
