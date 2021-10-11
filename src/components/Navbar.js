import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import trad from '../images/trad.png'
import '../styles/navbar.css';
import {AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    // switch the mobile menu on and off
    const flip = () =>{
        let moby = document.getElementById('mob');
        if(toggle){
            moby.style.display = 'block'
            setToggle(!toggle)
        }else{
            moby.style.display = 'none'
            setToggle(!toggle)
        }
    }

    // remove the menu from the screen when a link is clicked on mobile
    const flipy = () =>{
        let moby = document.getElementById('mob'); 
        moby.style.display = 'none'
    }
    return (
        <nav>
            <Link to='/'><img src={trad}/></Link>
            <div className='navy'>
                <Link to='/Trade'><span className='instant'>Instant Buy/Sell</span></Link>
                <Link to='/dashboard'><span className='dashboard'>Dashboard</span></Link>
                <Link to='/Login'><button className='login'>Log in</button></Link>
                <Link to='/Getstarted'><button className='getstarted'>Get Started</button></Link>
            </div>
            <div className='navymobile'>
                <AiOutlineMenu onClick={flip}/>
                <div className='mobile' id='mob'>
                    <Link to='/Trade'><li className='' onClick={flipy}>Instant Buy/Sell</li></Link>
                    <Link to='/dashboard'><li className='' onClick={flipy}>Dashboard</li></Link>
                    <Link to='/Login'><li className='' onClick={flipy}>Log in</li></Link>
                    <Link to='/Getstarted'><li className='' onClick={flipy}>Get Started</li></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
