import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return <div className="flex flex-col items-center background relative overflow-x-hidden w-full h-screen">
    <h1 className="bg-white rounded-lg text-4xl w-11/12 px-10 py-2 mt-[40px] font-bold text-center">RANDOM GIFS</h1>
    <div className="flex flex-col w-full items-center gap-y-8 mt-[30px] ">
      <Random/>
      <Tag/>
    </div>
  </div>;
}
