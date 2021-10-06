import React, {useState} from 'react'
import '../styles/getstarted.css';

const Getstarted = () => {
    const [state, setstate] = useState('individual')
    const [username, setusername] = useState('')
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [ref, setref] = useState('')
    const rebounce = () =>{
        console.log("yeah")
        setstate('business')
    }
    const reboun = (e) =>{
        console.log(e)
        setstate('individual')
    }
    if( state === 'individual'){
        return (
            <section className='getstartedd'>
                <div className='getstartedd_div'>
                    <p>welcome!</p>
                    <div className='busandind'>
                        <button className='individual' id='individual' onClick={rebounce}>individual</button>
                        <button className='business' id='business' onClick={rebounce}>Business</button>
                    </div>
                    <form className='getstartedform'>
                        <input type='hidden' value={state}/>
                        <input placeholder='username' type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
                        <input placeholder='full name' type='text' value={fullname} onChange={(e)=>setfullname(e.target.value)}/>
                        <input placeholder='email' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <input placeholder='phone number' type='text' value={number} onChange={(e)=>setnumber(e.target.value)}/>
                        <input placeholder='referral code(optional)' type='text' value={ref} onChange={(e)=>setref(e.target.value)}/>
                        <button type='submit' className='getstartedform_submit'>Sign Up</button>
                    </form>
                </div>
            </section>
        )
    }else if (state === 'business'){
        return (
            <section className='getstartedd'>
                <div className='getstartedd_div'>
                    <p>welcome!</p>
                    <div className='busandind'>
                        <button className='individualtwo' id='individual' onClick={reboun}>individual</button>
                        <button className='businesstwo' id='business' onClick={reboun}>Business</button>
                    </div>
                    <form className='getstartedform'>
                        <input type='hidden' value={state}/>
                        <input type='hidden' value={state}/>
                        <input placeholder='username' type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
                        <input placeholder='full name' type='text' value={fullname} onChange={(e)=>setfullname(e.target.value)}/>
                        <input placeholder='email' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <input placeholder='phone number' type='text' value={number} onChange={(e)=>setnumber(e.target.value)}/>
                        <input placeholder='referral code(optional)' type='text' value={ref} onChange={(e)=>setref(e.target.value)}/>
                        <button type='submit' className='getstartedform_submit'>Sign Up</button>
                    </form>
                </div>
            </section>
        )
    }
    
}

export default Getstarted
