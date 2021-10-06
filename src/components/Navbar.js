import React from 'react';
import {Link} from 'react-router-dom';
import trad from '../images/trad.png'
import '../styles/navbar.css';
import {AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    return (
        <nav>
            <Link to='/'><img src={trad}/></Link>
            <div className='navy'>
                <Link to='/Trade'><span className='instant'>Instant Buy/Sell</span></Link>
                <span>Learn</span>
                <Link to='/Login'><button className='login'>Log in</button></Link>
                <Link to='/Getstarted'><button className='getstarted'>Get Started</button></Link>
            </div>
            <div className='navymobile'>
                <AiOutlineMenu/>
            </div>
        </nav>
    )
}

export default Navbar
