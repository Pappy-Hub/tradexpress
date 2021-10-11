import React from 'react'
import '../styles/indcryptobal.css';


const IndCryptoBal = (props) => {
    return (
        <section className='indcry'>
            <div className='bitcoin'>
                <span>{props.crypto}</span><br/>
                <span>{props.balance}</span>
            </div>
            <img src={props.img}/>
        </section>
    )
}

export default IndCryptoBal
