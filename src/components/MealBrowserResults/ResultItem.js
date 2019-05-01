import React from 'react';
import './ResultItem.css';


export default function ResultItem(props){
    const ingredients= props.ingredients.map((i, index)=>{
        return <p key={index}>{i.text}</p>

    })
    return(
        <div className='result-item'>
        <h4>{props.name}</h4>
        <button>View Ingredients</button><br/>
        <button>View Instructions</button><br/>
        <img src={props.pic} alt='x'/>
        <div className='result-item-ingredients '>{ingredients}</div>
        {/* <p className='result-item-instructions hidden'>{props.instructions}</p> */}
        </div>
    )

}