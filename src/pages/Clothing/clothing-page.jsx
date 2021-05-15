import React, {useState} from 'react';
import StoreTable from './components/store-table/store-table.comp';
import StoreTable2 from './components2/store-table2/store-table.comp2';

import './products-page.css';

const CoursesPage = () => {


    let garmentsList = [
        {
            id:"c1",
            name:'Pulpas',
            garments:[
                {
                    id:"c1g1",
                    name:"Mango",
                    price: 2800,
                    cant:"250 gr",
                },
                {
                    id:"c1g2",
                    name:"Mora",
                    price: 2200,
                    cant:"250 gr",
                },
                {
                    id:"c1g3",
                    name:"Lulo",
                    price: 2550,
                    cant:"250 gr",
                }
            ],
        },
        {
            id:"c2",
            name:'Costeles',
            garments:[
                {
                    id:"c2g1",
                    name:"Piña",
                    price: 5100,
                    cant:"250 gr",
                },
                {
                    id:"c2g2",
                    name:"Curuba",
                    price: 4800,
                    cant:"250 gr",
                },
                {
                    id:"c2g3",
                    name:"Maracuyá",
                    price: 3750,
                    cant:"250 gr",
                }
            ],
        }
    ];
    let garmentsList2 = [
        {
            id:"d1",
            name:'Helados',
            garments2:[
                {
                    id:"d1g1",
                    name:"Mani",
                    price: 4000,
                    cant:"400 gr",
                },
                {
                    id:"d1g2",
                    name:"Coco",
                    price: 4200,
                    cant:"400 gr",
                },
                {
                    id:"d1g3",
                    name:"Chocolate",
                    price: 4800,
                    cant:"400 gr",
                }
            ],
        },
        {
            id:"d2",
            name:'Cereales',
            garments2:[
                {
                    id:"d2g1",
                    name:"Choco",
                    price: 6800,
                    cant:"1000 gr",
                },
                {
                    id:"d2g2",
                    name:"Milo",
                    price: 8800,
                    cant:"1000 gr",
                },
                {
                    id:"d2g3",
                    name:"Fruits",
                    price: 4800,
                    cant:"250 gr",
                }
            ],
        }
    ];

    const [garments, SetGarments]= useState(garmentsList);

    const [garments2, SetGarments2]= useState(garmentsList2);

    return(
        <>
            <div className="products-page-container">
                <StoreTable 
                    garmentsList={garments}
                    onAddGarment={(newGarmentObjt, categoryId)=>{
                        const newGarments = [];
                        for(let i=0; i<garments.length; i++) {
                            if(garments[i].id !== categoryId){
                                newGarments.push(garments[i]);
                            }
                            else {
                                newGarments.push(
                                {
                                    ...garments[i],
                                    garments:[...garments[i].garments, newGarmentObjt]
                                }
                                );
                            }
                        }

                        SetGarments(newGarments);
                    }}
                />
                <StoreTable2
                    garmentsList2={garments2}
                    onAddGarment2={(newGarment2Objt, categoryId)=>{
                        const newGarments2 = [];
                        for(let i=0; i<garments.length; i++) {
                            if(garments2[i].id !== categoryId){
                                newGarments2.push(garments2[i]);
                            }
                            else {
                                newGarments2.push(
                                {
                                    ...garments2[i],
                                    garments2:[...garments2[i].garments2, newGarment2Objt]
                                }
                                );
                            }
                        }

                        SetGarments2(newGarments2);
                    }}
                />
            </div>
        </> 
    )
}

export default CoursesPage;