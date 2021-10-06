import React from 'react';
import '../styles/fetcher.css';
import {BsArrowDown, BsArrowUp} from 'react-icons/bs'

const Fetcher = (props) => {
    console.log(props.my_data)
    const my_arrows= [<BsArrowDown className='arrow-d'/>, <BsArrowUp className='arrow-d up'/>]
    return (
        <section className='fetcher'> 
            {
                props.my_data.map((d)=>{
                    return(
                        <div className='crypto-div' key={d.id}>
                            <div className='crypto'>
                                <p className='cryptop'>{d.id}</p>
                                <p className='percentage'>-3.21%</p>
                                {my_arrows[Math.floor(Math.random() * my_arrows.length)]}
                            </div>
                            <p className='cryptop'>{d.name}</p> 
                        </div>
                    )
                })
            }
        </section>
        
    )
}

export default Fetcher

                        
                    