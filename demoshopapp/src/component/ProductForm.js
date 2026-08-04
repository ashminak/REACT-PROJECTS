import { useState } from "react";

function ProductForm(props){
    const[newTitle, setTitle] =useState('');
    const[newDate, setDate] =useState('');
    function titleChangeHandler(event){
        setTitle(event.target.value);
    }
    function dateChangeHandler(event){
        setDate(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const productData = {
            title:newTitle,
            date:newDate
        };
        // console.log(productData);
        props.onSaveProduct(productData);
        setTitle('');
        setDate('');

    }
    return (<form onSubmit={submitHandler}>
        <div className='new-product_controls'>
                <div className='new_product_control'>
            <label>Title</label>
            <input onChange={titleChangeHandler} value={newTitle} type='text'></input>
        </div>
        <div className='new-product_control'>
            <label>Date</label>
            <input  onChange={dateChangeHandler} value={newDate} type='date' min = '2026-01-01' max='2026-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add to Cart</button>
        </div>
        </div>
        
    </form>)
}
export default ProductForm;