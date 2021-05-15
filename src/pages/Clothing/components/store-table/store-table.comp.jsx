import React, { useState } from 'react';
import ClothingTable from '../clothing-table/clothing-table.comp';


import './store-table.style.css';

const StoreTable = (props) => {

    const [category, setCategory] = useState('c1');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [cant, setCant] = useState('');

    const addGarment = (event)=>{
        event.preventDefault();
        const newGarment = {
            id: name,
            name: name,
            price: parseFloat(price),
            cant: cant,
        }
        props.onAddGarment(newGarment, category);
    }


    return(
        <div className="store-table-container">
            <div>
                <ClothingTable garmentsList={props.garmentsList}/>
            </div>
            <div className="forms">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Producto
                                </td>
                                <td>
                                    <select
                                        value={category}
                                        onChange={(event)=>{
                                            setCategory(event.target.value);
                                        }}
                                    >
                                        <option value="c1">Pulpa</option>
                                        <option value="c2">Coctel</option>
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
                                        onClick={addGarment}
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

export default StoreTable;