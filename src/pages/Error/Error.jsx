import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
           <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center my-12">
                <h1 className="text-7xl my-5">404 Not Found</h1>
                <p className='my-5'>The page you visited isn't found</p>
                <Link to={"/"} className='btn btn-primary text-white my-5'>Return To Home</Link>
            </div> 
        </>
    );
};

export default Error;