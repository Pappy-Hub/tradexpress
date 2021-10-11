import React, {useState} from 'react'
import '../styles/getstarted.css';

const Getstarted = () => {
    const [state, setstate] = useState('individual')
    const [username, setusername] = useState('')
    const [businessname, setbusinessname] = useState('')
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [number, setnumber] = useState('')
    const [ref, setref] = useState('')
    const [password, setpassword] = useState('')
    const [password_repeat, setpassword_repeat] = useState('')
    const rebounce = () =>{
        setstate('individual')
        console.log(state)
    }
    const reboun = (e) =>{
        setstate('business')
        console.log(state)
    }
    if( state === 'individual'){
        return (
            <section className='getstartedd'>
                <div className='getstartedd_div'>
                    <p>welcome! {state}</p>
                    <div className='busandind'>
                        <button className='individual' id='individual' onClick={rebounce}>individual</button>
                        <button className='business' id='business' onClick={reboun}>Business</button>
                    </div>
                    <form className='getstartedform'>
                        <input type='hidden' value={state}/>
                        <input placeholder='username' type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
                        <input placeholder='full name' type='text' value={fullname} onChange={(e)=>setfullname(e.target.value)}/>
                        <input placeholder='email' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <input placeholder='phone number' type='text' value={number} onChange={(e)=>setnumber(e.target.value)}/>
                        <input placeholder='referral code(optional)' type='text' value={ref} onChange={(e)=>setref(e.target.value)}/>
                        <input placeholder='password' type='text' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        <input placeholder='re-enter password' type='text' value={password_repeat} onChange={(e)=>setpassword_repeat(e.target.value)}/>
                        <button type='submit' className='getstartedform_submit'>Sign Up</button>
                    </form>
                </div>
            </section>
        )
    }else if (state === 'business'){
        return (
            <section className='getstartedd'>
                <div className='getstartedd_div'>
                    <p>welcome! {state}</p>
                    <div className='busandind'>
                        <button className='individualtwo' id='individual' onClick={rebounce}>individual</button>
                        <button className='businesstwo' id='business' onClick={reboun}>Business</button>
                    </div>
                    <form className='getstartedform'>
                        <input type='hidden' value={state}/>
                        <input placeholder='username' type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
                        <input placeholder='business name' type='text' value={businessname} onChange={(e)=>setbusinessname(e.target.value)}/>
                        <input placeholder='email' type='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <input placeholder='phone number' type='text' value={number} onChange={(e)=>setnumber(e.target.value)}/>
                        <input placeholder='referral code(optional)' type='text' value={ref} onChange={(e)=>setref(e.target.value)}/>
                        <input placeholder='password' type='text' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                        <input placeholder='re-enter password' type='text' value={password_repeat} onChange={(e)=>setpassword_repeat(e.target.value)}/>
                        <button type='submit' className='getstartedform_submit'>Sign Up</button>
                    </form>
                </div>
            </section>
        )
    }
    
}

export default Getstarted
