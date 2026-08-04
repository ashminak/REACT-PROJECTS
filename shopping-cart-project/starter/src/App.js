import { Route,Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import HomePage from "./page/HomePage";
import CartPage from "./page/CartPage";

const App = () => {
  return(
    <div>
    
      <div>
             <Navbar/>
      </div>
   
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
