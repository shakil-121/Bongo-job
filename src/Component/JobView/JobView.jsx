import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./JobView.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faCalendarDay, faDollar } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {addToDb} from '../../utilities/fakedb'

const JobView = () => {
  const [jobs, setJobs] = useState([]);
  const dynamic = useParams();
  const routerID = dynamic.id;

  useEffect(() => {
    fetch("/job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const details = jobs.find((job) => job.id == routerID);
  // console.log(details);


   const [cart,setCart]=useState([]) 

   const addToLocal=(job)=>{ 
    const newcart=[...cart,job]; 
    setCart(newcart); 
    addToDb(job.id)
   }

  
  return (
    <div>
           <div className="banner">
            <h1>Job Details</h1>
           </div>  
<div className="parent">
<div className="job-description">
            <p> <span style={{fontWeight:'bold'}}>Job Description :</span>{details?.job_description}</p>
            <p> <span style={{fontWeight:'bold'}}>Job Responsibility :</span>{details?.job_responsibility}</p> 
            <p style={{fontWeight:'bold'}}>Educational Requirements:</p>
            <p>{details?.educational_requirement}</p> 
            <p style={{fontWeight:'bold'}}>Experiences:</p> 
            <p>{details?.experience}</p>
            </div> 


           <div className="job-details-card">
           <p style={{fontWeight:'bold'}}>Job Details</p>  
           <hr />
           <p> <span style={{fontWeight:'bold'}}>Salary: </span>{details?.salary}</p>
           <p> <span style={{fontWeight:'bold'}}>Job Title: </span>{details?.job_title}</p>
           <hr /> 
           <p style={{fontWeight:'bold'}}>Contact Information</p>
           <hr />
           <p> <span style={{fontWeight:'bold'}}>Phone :</span>{details?.phone}</p>
           <p> <span style={{fontWeight:'bold'}}>Email :</span>{details?.email}</p>
           <p> <span style={{fontWeight:'bold'}}>Adress :</span>{details?.place}</p> 
           
           <button onClick={()=>addToLocal(details)} style={{padding:'8px 25px', backgroundColor:'#006eff', borderRadius:'8px',border:'none',color:'#fff',margin:'10px 65px'}}>Apply Now</button>
           </div>
</div>

          
    </div>
  );
};

export default JobView;
