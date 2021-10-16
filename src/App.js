import React, {useState, useEffect} from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Getstarted from './pages/Getstarted';
import Login from './pages/Login';
import Trade from './pages/Trade';
import AlmostThere from './pages/AlmostThere';
import Dashboard from './pages/Dashboard';
import {BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  // usestate for that data
  const [data, setData] = useState([
    
  ])

  // function for the data fetch
  
  const getData = async () =>{
    try {
      let response =  await fetch("https://api.nomics.com/v1/currencies/ticker?key=365ce03265409d09dc1747bf53efeef418417369&ids=BTC,ETH,XRP,USDT,LTC&interval=1d,30d&convert=EUR&per-page=100&page=1",);
      let p = await fetch("http://localhost:8000/api/users/");
      let my_p = await response.json();
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
          <Router exact path="/trade">
            <Trade/>
          </Router>
          <Router exact path="/login">
            <Login/>
          </Router>
          <Router exact path="/almostthere">
            <AlmostThere/>
          </Router>
          <Router exact path="/dashboard">
            <Dashboard my_data={data}/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// curl "https://api.nomics.com/v1/currencies?key=your-key-here&ids=BTC,ETH,XRP&attributes=id,name,logo_url"
// 