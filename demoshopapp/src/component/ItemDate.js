import './ItemDate.css';

function ItemDate(props){
    // const day = 20;
    // const month = "August";
    // const year = 2000;
    return(
        <div className='date'>
            <span>{props.day} </span>
            <span>{props.month} </span>
            <span>{props.year}</span>
        </div>
    )
}
export default ItemDate;