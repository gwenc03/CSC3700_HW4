import React from 'react';
import {Link} from "react-router-dom";

function WelcomePage(props) {
    return (
        <div style={{padding: '30px'}}>
            <h1 style={{padding: '10px'}}> Welcome to Happy Harry's Hardware </h1>
            <Link to='/homepage' className='btn btn-primary' > Go to Home </Link>

        </div>
    );
}

export default WelcomePage;