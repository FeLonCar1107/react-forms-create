import React, { useState } from 'react';
import ClothingTable2 from '../clothing-table2/clothing-table.comp2';


import './store-table.style2.css';

const StoreTable2 = (props) => {

    const [category2, setCategory2] = useState('d1');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cant, setCant] = useState('');

    const addGarment2 = (event)=>{
        event.preventDefault();
        const newGarment2 = {
            id: name,
            name: name,
            price: parseFloat(price),
            cant: cant,
        }
        props.onAddGarment2(newGarment2, category2);
    }



    return(
        <div className="store-table-container2">
            <div>
                <ClothingTable2 garmentsList2={props.garmentsList2}/>
            </div>

            <div className="forms2">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Producto
                                </td>
                                <td>
                                    <select
                                        value={category2}
                                        onChange={(event)=>{
                                            setCategory2(event.target.value);
                                        }}
                                    >
                                        <option value="d1">Helados</option>
                                        <option value="d2">Cereales</option>
                                    </select> 
                                </td>
                            </tr>
                            <tr>
                                <td>Nombre</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={name}
                                        onChange={(event)=>{
                                            setName(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Gramos</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={cant}
                                        onChange={(event)=>{
                                            setCant(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Precio</td>
                                <td>
                                    <input 
                                        type="text"
                                        value={price}
                                        onChange={(event)=>{
                                            setPrice(event.target.value);
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button
                                        onClick={addGarment2}
                                    >                                        
                                        Añadir producto
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        
    )
}

export default StoreTable2;