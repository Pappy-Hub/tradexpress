import React from 'react'
import '../styles/home.css'
import Header from '../components/Header';
import Fetcher from '../components/Fetcher';
import img1 from '../images/home_image.png';
import img2 from '../images/home_image2.png';
import img3 from '../images/guyandphone.jfif';
import img4 from '../images/wallet.jfif';
import img5 from '../images/tablet.jpg';
import apple from '../images/apple.png';
import playstore from '../images/playstore.png'



const Home = (props) => {
    return (
        <section className='home'>
            
            <Header/>
            <Fetcher my_data={props.my_data}/>
            <section className='first_section'>
                <p className='first_section_p'>why do people get involved with cryptocurrencies?</p>
                <div className='first_section_div'>
                    <div className='first_section_div_child' >
                        <img className='img1' src={img1} className='img1'/>
                        <h3>easy mode of payment</h3>
                        <p>
                            people can now easily send and recieve money from
                            anywhere in the world to purchase goods and pay for services
                        </p>
                    </div>
                    <div className='first_section_div_child'>
                        <img className='img1' src={img2}/>
                        <h3>finacial freedom</h3>
                        <p>
                        Just like the internet no single entity controls the Crypto network which
                        provides users transparency and privacy, which puts you in absolute control of your money.
                        </p>
                    </div>
                    <div className='first_section_div_child'>
                        <img className='img1' src={img1}/>
                        <h3>investment</h3>
                        <p>
                        The constant demand as made Cryptocurrecies a Digital Gold used for alternative
                         store of wealth on long term investments.
                        </p>
                    </div>
                </div>
                <button>learn more</button>
            </section>
            <section className='second_section'>
                <p className='second_section_p'>buy and sell your cryptocurrencies in 3 simple steps</p>
                <div className='second_section_child'>
                    <div className='second_section_divs'>
                        <div className='dbc'>
                            <h3>create a free account</h3>
                            <p>
                            Sign up for your free TradExpress Wallet on web, iOS, or Android
                            devices and follow our easy process to set up your profile.
                            </p>
                        </div>
                        <img src={img3} className='sec_img'/>
                    </div>
                
                
                    <div className='second_section_divs'>
                        <img src={img4} className='sec_img'/>
                        <div className='dbc'>
                            <h3>deposit</h3>
                            <p>
                            Choose your preferred deposit option like bank transfer, credit/debit
                            card or send digital asset directly to your wallet for easy funding/withdrawal.
                            </p>
                        </div>
                    </div>
                
                
                    <div className='second_section_divs'>
                        <div className='dbc'>
                            <h3>buy/sell crypto</h3>
                            <p>
                            Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store
                            it in your wallet or send it easily to friends and family.
                            </p>
                        </div>
                        <img  src={img5} className='sec_img size'/>
                    </div>
                </div>
            </section>
            <section className='third_section'>
                <h5 className='third_section_h5'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</h5>
                <h3>Create your account for free and start trading today!</h3>
                <button className='thirdsectionbutton'>Get Started</button>
                <div className='button-app-div'>
                <div className='third_section_button_div'>
                    <button className='third_section_button'>
                        <img src={apple}/>
                        <div className='appstore-div'>
                            <span className='download'>Download on the</span>
                            <span className='span-appstore'>App Store</span>
                        </div>
                    </button>
                    <button className='third_section_button'>
                        <img src={playstore}/>
                        <div className='appstore-div'>
                            <span className='download'>Download on the</span>
                            <span className='span-appstore'>Google Store</span>
                        </div>
                    </button>
                </div>
            </div>
            </section>
            <section className='customer_review'>
                <h4>customer's review</h4>
                <section className='customer_review_child_section'>
                    <div className='customer_review_child'>
                        <span>
                            Trading on TradExpress mobile & web platforms has been a
                            smooth experience for me quite easy to navigate.
                        </span>                       
                    </div>
                    <div className='customer_review_child'>
                        <span>
                            They have the best rate compared to other platforms with fast payout.
                        </span>
                    </div>
                    <div className='customer_review_child'>
                        <span>
                            Easy to fund and withdraw coins or cash on their platform,
                            I will definitely trade with them again.
                        </span>
                    </div>
                </section>
            </section>
            <section className='footer'>
                <ul>
                    <li className='first'>Products</li>
                    <li>bitcoin</li>
                    <li>alts</li>
                    <li>fiat</li>
                    <li>refill</li>
                    <li>p2p</li>
                </ul>
                <ul>
                   <li className='first'>Learn</li>
                   <li>blog</li>
                   <li>center</li>
                </ul>
                <ul>
                    <li className='first'>contact</li>
                    <li>hello@tradexpress@gmail.com </li>
                    <li>support@tradexpress@gmail.com</li>
                </ul>
                <ul>
                    <li className='first'>company</li>
                    <li>about</li>
                    <li>careers</li>
                    <li>rates</li>
                    <li>mobile</li>
                </ul>
                <ul>
                    <li className='first'>legal</li>
                    <li>privacy policy</li>
                    <li>anti-money laundering</li>
                    <li>terms and conditions</li> 
                </ul>
            </section>
        </section>
    )
}

export default Home
