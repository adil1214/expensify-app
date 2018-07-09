import React from 'react';
import { Link } from 'react-router-dom';


const NotFoundPage = () => (
    <div>
        404, not found. <br/>
        <Link to="/">Go home</Link>
    </div>
);

export default NotFoundPage;