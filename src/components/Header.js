import React from 'react';
import '../styles/header.css';
import apple from '../images/apple.png';
import playstore from '../images/playstore.png'

const Header = () => {
    return (
        <header>
            <p className='headerp'>Buy, sell and manage your crypto on tradexpress.</p>
            <p className='headerptwo'>easily trade cryptocurrencies like BTC,ETH,LTC,USDT and XRP with NGN</p>
            <button className='headerbutton'>Get Started</button>
            <div className='button-app-div'>
                <button className='appstore'>
                    <img src={apple}/>
                    <div className='appstore-div'>
                        <span className='download'>Download on the</span>
                        <span className='span-appstore'>App Store</span>
                    </div>
                </button>
                <button className='googleplay'>
                    <img src={playstore}/>
                    <div className='appstore-div'>
                        <span className='download'>Download on the</span>
                        <span className='span-appstore'>Google Store</span>
                    </div>
                </button>
            </div>
        </header>
    )
}

export default Header
