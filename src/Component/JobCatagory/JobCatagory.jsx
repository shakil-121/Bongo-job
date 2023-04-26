import React, { useEffect, useState } from 'react';
import './JobCatagory.css'
import Card from '../Card/Card';
const JobCatagory = () => { 
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('catagory.json') 
        .then(res=>res.json()) 
        .then(data=>setData(data))
    },[])
    return (
        <div> 
            <div className="catarogyHeader">
                <h1>Job Category List</h1> 
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p> 
            </div> 
            <div className="card">
                {
                    data.map(card=><Card 
                    key={card.id} 
                    card={card}
                    ></Card>)
                }
            </div>
            
        </div>
    );
};

export default JobCatagory;