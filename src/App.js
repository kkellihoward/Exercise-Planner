import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import LandingPage from './pages/landingpage'

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element ={<LandingPage />} />
        </Routes>
    </div>
  );
}

export default App;
