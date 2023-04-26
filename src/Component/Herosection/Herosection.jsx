import React from 'react'; 
import Lottie from 'lottie-react' 
import job from '../../assets/75702-job-proposal-review-animation.json'
import './Herosection.css'

const Herosection = () => {
    return (
        <div className='herosection'>
            <div className="left-section">
                <h1>One Step <br /> Closer To Your <br /><span>Dream Job</span> </h1> 
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p> 
                <button>Get Started</button>
                </div> 
            <div className="right-section ">
            <Lottie className='hero-ani' style={{height:'510px', width:'510px',margin:'0px 20px'}} animationData={job} loop={true} />
            </div>
        </div>
    );
};

export default Herosection;