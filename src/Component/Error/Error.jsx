import React from 'react'; 
import Lottie from 'lottie-react' 
import error from '../../assets/98170-sunthalpy-404.json'
import { Link } from 'react-router-dom'; 
import './Error.css'

const Error = () => {
    return (
        <div>
            <Lottie style={{height:'400px', width:'400px',margin:'auto'}} animationData={error} loop={true} />; 
          <h2 style={{textAlign:'center', color:'#000'}}>Page Not Found !!!!</h2> 
          <button className='Error-btn'><Link to='/'>Go Back</Link> </button>
        </div>
    );
};

export default Error;