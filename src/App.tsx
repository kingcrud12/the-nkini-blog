import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/Home"
import Arts from "./pages/arts/Arts"
import About from "./pages/about/About"
import Cinema from "./pages/cinema/Cinema"
import Music from "./pages/music/Music"
import Portfolio from "./pages/portfolio/Portfolio"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/arts' element={<Arts />} />
        <Route path='/about' element={<About />} />
        <Route path='/cinema' element={<Cinema />} />
        <Route path='/music' element={<Music />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
