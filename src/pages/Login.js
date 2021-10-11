import React, {useState} from 'react';
import '../styles/getstarted.css';
import '../styles/login.css'

const Getstartedtwo = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    return (
        <section className='getstartedd'>
           <div className='getstartedd_div'>
                <p>welcome back!</p>
                <form className='getstartedform'>
                    <input placeholder='username' type='text' value={username} onChange={(e)=>setusername(e.target.value)}/>
                    <input placeholder='password' type='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <div className='remandforg'>
                        <span>remember password</span>
                        <span className='forgot'>forgot password?</span>
                    </div>
                    <button type='submit' className='getstartedform_submit loginn'>Login</button>
                </form>
            </div> 
        </section>
    )
}

export default Getstartedtwo
