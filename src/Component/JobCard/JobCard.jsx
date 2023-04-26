import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons'; 
import './JobCard.css'; 
import { Link} from 'react-router-dom';

const JobCard = (props) => { 
    const {id,logo_url,job_title,company_name,job_category,job_type,place,salary}=props.job;  

    return (
        <div className='jobCard'> 
          <img src={logo_url} alt="" />
          <h3>{job_title}</h3>
          <h5>{company_name}</h5> 
          <div>
            <button>{job_category}</button> 
            <button className='btn-two'>{job_type}</button>
          </div> 
          <div className='footer-icon'>
            <p><FontAwesomeIcon icon={faLocationDot} />{place}</p>
            <p><FontAwesomeIcon icon={faCircleDollarToSlot} />Salary : {salary}</p>
          </div>  
           <Link to={`/jobdetails/${id}`}> 
           <button className='details-btn'>View Details</button>
           </Link>
          
                     
        </div>
    );
};

export default JobCard;