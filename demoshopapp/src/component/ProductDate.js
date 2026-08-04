import './ProductDate.css';

const ProductDate = (props) =>{
    const month = props.date.toLocaleString('en-US', { month:'long'});
    const day = props.date.toLocaleString('en-US',{ day:'2-digit'});
    const year = props.date.getFullYear();

    return(
        <div className='productDate'>
            <div className='productDate_month'>{month}</div>
            <div className='productDate_year'>{year}</div>
            <div className='productDate_day'>{day}</div>
        </div>
    );
}
export default ProductDate;