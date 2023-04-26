import React from 'react'; 
import './AppliedJobCard.css'
import { Link } from 'react-router-dom';

const AppliedJobCard = (props) => { 
    console.log(props) 
    const {id,logo_url,job_title,company_name,job_category,job_type,place,salary}=props.job;
    return (
        <div className='appliedCard'>
            <img src={logo_url} alt="" /> 
            <div className="info">
                <h4>{job_title}</h4> 
                <p>{company_name}</p>
                  <div className="job_type">
                    <button>{job_category}</button>
                    <button className='btn_two'>{job_type}</button>
                  </div> 
                  <div className="info_footer">
                    <p>Address: {place}</p>
                    <p>Salary: {salary}</p>
                  </div>
            </div> 
            <Link to={`../jobdetails/${id}`}><button className='view'>View Details</button></Link>
            
        </div>
    );
};

export default AppliedJobCard;