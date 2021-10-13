import React from 'react';
import '../styles/fetcher.css';
import {BsArrowDown, BsArrowUp} from 'react-icons/bs';
import loading from '../images/loading.jpg'

const Fetcher = (props) => {
    console.log(props.my_data)
    const my_arrows= [<BsArrowDown className='arrow-d'/>, <BsArrowUp className='arrow-d up'/>]
    if(props.my_data < 1){
        return(
            <section className='fetcher'>
                <img src={loading} className='img_loading'/>
            </section>
        )
    }
    else{
        return (
            <section className='fetcher'> 
                {
                    props.my_data.map((d)=>{
                        return(
                            <div className='crypto-div' key={d.id}>
                                <div className='crypto'>
                                    <p className='cryptop'>{d.id}</p>
                                    <p className='percentage'>{d.market_cap_dominance}</p>
                                    {my_arrows[Math.floor(Math.random() * my_arrows.length)]}
                                </div>
                                <p className='cryptop'>{d.price}</p> 
                            </div>
                        )
                    })
                }
            </section>
            
        )
    }
}

export default Fetcher

                        
                    