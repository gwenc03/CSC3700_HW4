import React from 'react';
import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <div style={{ padding: '20px' }}>
            <h1> Page Not Found </h1>
            <Link to='/homepage' className='btn btn-primary'> Go to Home </Link>
        </div>
    );
}

export default NotFound;