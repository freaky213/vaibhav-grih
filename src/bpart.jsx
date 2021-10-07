import React from 'react'
import product from './product'
import './style.css';


const bpart=()=>
{
    return (
        <>
        
        <div className="bodyc">
            <h2>hii we are from Baibhaw grih udhog</h2>
            <h3>OUR Product </h3>
            {
        product.map((val,index)=>{
            return (
               <div className='row'> 
                <ul>
                <li><img src={val.imgsrc} alt=""  style={{height:"420px"}}></img><h3>{val.pname}</h3></li>
                </ul>
                </div>
            );
        })
            }
        </div>
   
        
            </>);
}
export default bpart;