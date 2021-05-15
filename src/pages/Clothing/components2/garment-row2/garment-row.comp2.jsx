import React from 'react';

import './garment-row.style2.css';

const GarmentRow2 = (props) => {
    return(
        <div className="garment-row-container2">
            
            {props.garment2.name}
            <br/>
            {props.garment2.price}
            <br/>  
            {props.garment2.cant}
        </div>
    )
}

export default GarmentRow2;