import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
     const guestLinks = (
        <ul>
            <li>
                <Link to='/'>
                    <i className='far fa-registered' />{' '}
                    <span className='hide-sm'>Home</span>
                </Link>
            </li>

            <li>
                <Link to='/coolstuff'>
                    <i className='fas fa-sign-out-alt' />{' '}
                    <span className='hide-sm'>Cool Stuff</span>
                </Link>
             </li>
             <li>
                 <Link to='/stuff'>
                     <i className='fas fa-sign-out-alt' />{' '}
                     <span className='hide-sm'>Stuff</span>
                 </Link>
             </li>
             <li>
                 <Link to='/contact'>
                     <i className='fas fa-sign-out-alt' />{' '}
                     <span className='hide-sm'>Contact</span>
                 </Link>
             </li>
        </ul>
    );
    /**
     * Fragment returns authlinks if authenticated or guestlinks 
     */
    return (
        <nav className='navbar bg-dark'>
            <h1>
                <Link to='/'>
                    <i className='fas fa-camera' /> Wireframe
        </Link>
            </h1>
            {(
                <Fragment>{ guestLinks}</Fragment>
            )}
        </nav>
    );
};

export default (Navbar);
