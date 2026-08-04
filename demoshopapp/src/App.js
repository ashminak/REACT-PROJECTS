
import './App.css';
import NewProduct from './component/NewProduct';
import Products from './component/Products';

function App() {
  
    const products = [
      {
        id : 'p1',
        title : "Tide",
        amount : 60,
        date : new Date(2026,6,5)
      },
      {
        id : 'p2',
        title : "Ghari",
        amount : 50,
        date : new Date(2026,4,8)
      },
       {
        id : 'p3',
        title : "Nirma",
        amount : 55,
        date : new Date(2026,3,8)
      },
       {
        id : 'p4',
        title : "Sunlight",
        amount : 55,
        date : new Date(2026,2,7)
      }
    ];
    function printProductData(data){
      console.log("I am inside final parent App.js ")
      console.log(data)
    }
  return (
    <div>
      <NewProduct printProduct={printProductData}/>
       <Products Item={products}></Products>
    </div>
    
  );
}

export default App;
