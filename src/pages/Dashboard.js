import React from 'react'
import img1 from '../images/trad.png'
import {BiMenuAltLeft, BiPencil} from 'react-icons/bi';
import {AiOutlineBell, AiFillWallet,AiOutlineSetting} from 'react-icons/ai';
import {FiLogOut} from 'react-icons/fi'
import {FaBlogger} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg';
import {RiDashboardLine, RiExchangeDollarFill} from 'react-icons/ri'
import '../styles/dashboard.css';
import Wallet from '../components/Wallet';
import IndCryptoBal from '../components/IndCryptoBal';
import bitcoin from '../images/bitcoin.png';
import usdt from '../images/usdt.png';
import ethereum from '../images/ethereum.png';
import Fetcher from '../components/Fetcher';

const Dashboard = (props) => {
    return (
        <section className='getstartedd'>
            <section className='getstartedd_sectionone'>
                <img src={img1}/>
                <ul>
                    <li><RiDashboardLine/> Dashboard</li>
                    <li><AiFillWallet/> Wallet</li>
                    <li><RiExchangeDollarFill/> Exchange rates</li>
                    <li><BiPencil/> Learn</li>
                    <li><FaBlogger/> Blog</li>
                    <li><CgProfile/> Profile</li>
                    <li><AiOutlineSetting/> Settings</li>
                    <li><FiLogOut/> Logout</li>
                </ul>
                <button className='contact_support'>Contact Support</button>
            </section>
            <section className='getstartedd_sectiontwo'>
                <div className='icon_nav'>
                    <BiMenuAltLeft className='icon_nav_bi'/>
                    <AiOutlineBell className='icon_nav_ai'/>
                </div>
                <Wallet/>
                <section className='crypto_wallet_bal'>
                    <h4>Crypto Wallet Balance</h4>
                    <div className='ppp'>
                        <IndCryptoBal crypto='bitcoin' balance='1.67' img={bitcoin}/>
                        <IndCryptoBal crypto='USDT' balance='100.67' img={usdt}/>
                        <IndCryptoBal crypto='ethereum' balance='41.67' img={ethereum}/>
                    </div>
                </section>
                <section className='fetchy'>
                    <Fetcher my_data={props.my_data}/>
                </section>    
            </section>
            
        </section>
    )
}

export default Dashboard
