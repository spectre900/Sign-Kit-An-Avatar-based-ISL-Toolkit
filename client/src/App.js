import './App.css'
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Convert from './Pages/Convert';
import Home from './Pages/Home';
import LearnSign from './Pages/LearnSign';
import Videos from './Pages/Videos';
import Navbar from './Components/Navbar';
import CreateVideo from './Pages/CreateVideo';
import Footer from './Components/Footer';

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
          <Route exact path='/sign-kit/create-video' element={<CreateVideo />} />
          <Route exact path='*' element={<Home/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;