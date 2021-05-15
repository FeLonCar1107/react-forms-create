import React from 'react';

import './type-garment-row.style.css';

const TypeGarmentRow = (props) => {
    return(
        <div className="type-garment-row-container">
            {props.typeGarment}
        </div>
    )
}

export default TypeGarmentRow;