import React, {useState} from 'react';
import '../styles/getstarted.css';
import '../styles/trade.css';



const Trade = () => {
    const [state, setstate] = useState('Buy')
    const [cointosell, setcointosell] = useState('Bitcoin')
    const [currency, setcurrency] = useState('')
    const [quantity, setquantity] = useState('')

    // other component
    const [cointobuy, setcointobuy] = useState('Bitcoin')

    const rebounce = () =>{
        setstate('Buy')
        console.log(state)
    }
    const reboun = (e) =>{
        setstate('Sell')
        console.log(state)
    }
    console.log(cointobuy)
    if( state === 'Buy'){
        return (
            <section className='getstartedd'>
                <div className='getstartedd_div'>
                    <p>Buy/Sell Instatntly {state}</p>
                    <div className='busandind'>
                        <button className='individual' id='individual' onClick={rebounce}>Buy</button>
                        <button className='business' id='business' onClick={reboun}>Sell</button>
                    </div>
                    <form className='getstartedform'>
                        <input type='hidden' value={state}/>
                        <select value={cointobuy} onChange={e => setcointobuy(e.target.value)} className='cointobuy'>
                            <option value='Bitcoin'>Bitcoin</option>
                            <option value="Ethereum" >Ethereum</option>
                            <option value='Litecoin' >Litecoin</option>
                            <option value='Usdt' >Usdt</option>
                        </select>
                        <select value={currency} onChange={e => setcointobuy(e.target.value)} className='cointobuy'>
                            <option value='NGN'>Naira</option>
                            <option value="USD" >Dollars</option>
                            <option value='EUR' >Euros</option>
                        </select>
                        <input className='amount' placeholder='amount' type='text' value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
                        <button type='submit' className='getstartedform_submit'>Buy</button>
                    </form>
                </div>
            </section>
        )
    }else if (state === 'Sell'){
        return (
            <section className='getstartedd'>
                <div className='getstartedd_div'>
                    <p>Buy/Sell Instatntly {state}</p>
                    <div className='busandind'>
                        <button className='individualtwo' id='individual' onClick={rebounce}>Buy</button>
                        <button className='businesstwo' id='business' onClick={reboun}>Sell</button>
                    </div>
                    <form className='getstartedform'>
                        <input type='hidden' value={state}/>
                        <select value={cointobuy} onChange={e => setcointobuy(e.target.value)} className='cointobuy'>
                            <option value='Bitcoin'>Bitcoin</option>
                            <option value="Ethereum" >Ethereum</option>
                            <option value='Litecoin' >Litecoin</option>
                            <option value='Usdt' >Usdt</option>
                        </select>
                        <select value={currency} onChange={e => setcointobuy(e.target.value)} className='cointobuy'>
                            <option value='NGN'>Naira</option>
                            <option value="USD" >Dollars</option>
                            <option value='EUR' >Euros</option>
                        </select>
                        <input className='amount' placeholder='amount' type='text' value={quantity} onChange={(e)=>setquantity(e.target.value)}/>
                        <button type='submit' className='getstartedform_submit'>Sell</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Trade
