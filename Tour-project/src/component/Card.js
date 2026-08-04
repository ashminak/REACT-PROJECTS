import { useState } from "react";


function Card({id, name,info, image,price,removeTour}){
  
    const[readmore,setReadMore]=useState(false)
      const description =readmore?info:`${info.substring(0,200)}...`;
    function readmoreHandler(){
        setReadMore(!readmore);
    }
    return(
        <div className="card">
            <img src={image} alt={name} className="image"></img>
            <div className="tour-info">
             <div className="tour-details">
                <h4 className="tour-price">₹ {price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>{readmore ? `show less`:`read more`}</span>
            </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>Not Interested</button>
           
        </div>
    )
}
export default Card;