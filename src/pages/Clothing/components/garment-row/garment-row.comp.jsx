import React from 'react';

import './garment-row.style.css';

const GarmentRow = (props) => {
    return(
        <div className="garment-row-container">
            
            {props.garment.name}
            <br/>
            {props.garment.price} 
            <br/>  
            {props.garment.cant}
        </div>
    )
}

export default GarmentRow;