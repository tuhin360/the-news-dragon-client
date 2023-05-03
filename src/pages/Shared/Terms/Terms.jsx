import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium tenetur voluptate sapiente debitis molestiae possimus aliquid saepe quisquam placeat eaque.</p>
            <p><Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;