import Header from "./components/Header";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import './App.css';
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";

export default function App({children}) {
  const{fetchData}=useContext(AppContext);
  const[searchParams,setSearchParams]=useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchData(Number(page),tag);
    }
    else if(location.pathname.includes("category")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ")
      fetchData(Number(page),null,category);
    }else{
      fetchData(Number(page));
    }
  },[location.pathname,location.search]);
  return(
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog/:blogId" element={<BlogPage/>}/>
    <Route path="/tags/:tagId" element={<TagPage/>}/>
    <Route path="/categories/:categoryId" element={<CategoryPage/>}/>
  </Routes>
  ) 
  // <div className="flex flex-col w-full h-full gap-y-1 justify-center items-center">
  //     <Header/>
  //     <Blog/>
  //     <Pagination/>
  // </div>;
  
}
