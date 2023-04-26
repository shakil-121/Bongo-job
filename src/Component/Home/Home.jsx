import React from 'react';
import Herosection from '../Herosection/Herosection';
import JobCatagory from '../JobCatagory/JobCatagory';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
           <Herosection></Herosection> 

            <JobCatagory></JobCatagory> 

            <Jobs></Jobs>
        </div>
    );
};

export default Home;