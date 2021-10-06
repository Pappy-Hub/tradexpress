import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Getstarted from './pages/Getstarted';
import Getstartedtwo from './pages/Getstartedtwo';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  // usestate for that data
  const [data, setData] = useState([])

  // function for the data fetch
  
  const getData = async () =>{
    try {
      let response =  await fetch("https://api.nomics.com/v1/currencies?key=365ce03265409d09dc1747bf53efeef418417369&ids=BTC,ETH,XRP,LTC,USDT&attributes=id,name,logo_url,price");
      let my_data = await response.json()
      console.log(my_data)
      setData(my_data)
    } catch (error) {
      console.log("error in fetching")
    }
    
  }

  

  // add an effect after render
  useEffect(() => {
    getData()  
  },[])

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Router exact path="/">
            <Home my_data={data}/>
          </Router>
          <Router exact path="/getstarted">
            <Getstarted />
          </Router>
        </Switch>
        <Switch>
          <Router exact path="/getstartedtwo">
            <Getstartedtwo />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// curl "https://api.nomics.com/v1/currencies?key=your-key-here&ids=BTC,ETH,XRP&attributes=id,name,logo_url"
// 