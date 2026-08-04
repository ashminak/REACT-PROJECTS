import Card from './Card';
import './ProductItem.css';
import ProductDate from './ProductDate';
import React,{ useState } from 'react';

const ProductItem = (props) =>{
    const [ title, setTitle] = useState(props.title)
        function clickHandler(){
             setTitle("Vim");
            console.log("Button Clicked");
        }

    return (
        <Card className ='productItem'>
        <ProductDate date={props.date}/>

        <div className='productItem_description'>
        <h2>{title}</h2>
        <div className="productItem_price">${props.amount}</div>
        <button onClick={clickHandler}>Add to Cart</button>
        </div>
        </Card>
    );
}
export default ProductItem;