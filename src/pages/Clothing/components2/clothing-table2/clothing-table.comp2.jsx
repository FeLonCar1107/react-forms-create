import React from 'react';
import TypeGarmentRow2 from '../type-garment-row2/type-garment-row.comp2'; 
import GarmentRow2 from '../garment-row2/garment-row.comp2';


import './clothing-table.style2.css';

const ClothingTable2 = (props) => {
    return(
        <div className="clothing-table-container2">
            {props.garmentsList2.map((category2, index)=>{
                return (
                    <React.Fragment key={category2.id}>
                        <TypeGarmentRow2 typeGarment2={category2.name}/>
                        <div className="left-content2">
                            {category2.garments2.map((garment2, indexGarment)=>{
                                return (
                                    <GarmentRow2
                                        key={garment2.id}
                                        garment2={garment2}
                                    />
                                );
                            })}
                        </div>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default ClothingTable2;


