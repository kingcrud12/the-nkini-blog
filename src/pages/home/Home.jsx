import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <div className='background'>
      <div className="backOpacity">
        <Navbar />
        <div className="header">
          <Header />
        </div>
      </div>
    </div>
  )
}

export default Home
