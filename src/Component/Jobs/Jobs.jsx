import React, { useEffect, useState } from 'react';
import JobCard from '../JobCard/JobCard'; 
import './Jobs.css'

const Jobs = () => { 
    const [jobs,setJobs]=useState([]); 
    const [visible,setVisible]=useState([4])
    const showall=()=>{ 
        setVisible((pervalue)=>pervalue+2);
    }

    useEffect(()=>{
        fetch('job.json') 
        .then(res=>res.json()) 
        .then(data=>setJobs(data))
    },[])
    return (
        <div className='jobs_section'>
            <h1>Featured Jobs</h1> 
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p> 
            <div className='job'>
                { 
                jobs.slice(0,visible).map(job=><JobCard
                key={job.id} 
                job={job}
                ></JobCard>)
                } 
            </div>
            <div className="showAll"> 
                <button  onClick={showall}>Show All</button>
                </div>
        </div>
    );
};

export default Jobs;