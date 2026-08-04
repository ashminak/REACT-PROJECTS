import './Item.css';
function Item(props){
    // const itemName = "Nirma";
    const itemName = props.name;
    return (
    <div>
        <p className={props.className}>{itemName}</p>
        <h2>{props.children}</h2>
    </div>
    );
}
export default Item;