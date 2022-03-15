import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import Videos from './Pages/Videos';
import About from './Pages/About';
import Navbar from './Components/Navbar';

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/sign-kit/home' element={<Home />} />
          <Route exact path='/sign-kit/convert' element={<Convert />} />
          <Route exact path='/sign-kit/learn-sign' element={<LearnSign />} />
          <Route exact path='/sign-kit/videos' element={<Videos />} />
          <Route exact path='/sign-kit/about-us' element={<About />} />
          <Route exact path='*' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;