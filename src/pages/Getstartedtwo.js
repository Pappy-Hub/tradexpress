import React, {useState} from 'react';
import '../styles/getstarted.css';

const Getstartedtwo = () => {
    const [state, setstate] = useState(0)
    const rebounce = () =>{
        console.log("yeah")
    }
    return (
        <section className='getstartedd'>
            <div className='getstartedd_div'>
                <p>welcome!</p>
                <div className='busandind'>
                    <button className='individual'>indd</button>
                    <button className='business' onClick={rebounce}>Business</button>
                </div>
            </div>lll
        </section>
    )
}

export default Getstartedtwo
