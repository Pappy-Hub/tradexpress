import React from 'react'
import '../styles/wallet.css'
import {BsBank2} from 'react-icons/bs'
import income from '../images/income.png'
import bank from  '../images/bank.png'

const Wallet = () => {
    return (
        <section className='wallet'>
            <div className='wallet_place'>
                <h5>wallet balance</h5>
                <p className='wallet_money'>230,000 <span className='naija'>NGN</span></p>
            </div>
            <div className='bank_space'>
                <div className='income'>
                    <img src={income} className='income_img'/>
                    <span>NGN Deposit</span>
                </div>
                <div className='bank'>
                    <img src={bank} className='bank_img'/>
                    <span>NGN Withdrawal</span>
                </div>
            </div>
        </section>
    )
}

export default Wallet
