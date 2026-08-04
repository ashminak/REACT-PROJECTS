import './Products.css';
import ProductItem from './ProductItem';
import Card from './Card';

const Products = (props) =>{
    return (
        <Card className ="products">
            <ProductItem 
            title ={props.Item[0].title}
            amount ={props.Item[0].amount}
            date ={props.Item[0].date}
            />
            <ProductItem
             title ={props.Item[1].title}
            amount ={props.Item[1].amount}
            date ={props.Item[1].date}
            />
            <ProductItem
             title ={props.Item[2].title}
            amount ={props.Item[2].amount}
            date ={props.Item[2].date}
            />
                <ProductItem
             title ={props.Item[3].title}
            amount ={props.Item[3].amount}
            date ={props.Item[3].date}
            />
        </Card>
    )
}
export default Products;