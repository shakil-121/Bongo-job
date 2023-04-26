import React from 'react';
import './Card.css'
const Card = (props) => { 
    const {id,logo,name,jobs_available}=props.card
    return (
        <div className='PerCard'>
            <img src={logo} alt="" /> 
            <h3>{name}</h3> 
            <p>{jobs_available} Jobs Available</p>
        </div>
    );
};

export default Card;