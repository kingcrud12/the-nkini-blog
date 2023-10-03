import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";


const Navbar = ({type}) => {
  return (
    <div className={type ==="Page" ? "PageNav" : "navBar"}>
      <div className="navContainer">
        <div className="Title">
          <Link to="/"><span className='Title'>The nkini project</span></Link>
        </div>
        <ul>
          <li><Link to="/"><span>Accueil</span></Link></li>
          <li><Link to="/arts"><span>Arts</span></Link></li>
          <li><Link to="/music"><span>Musique</span></Link></li>
          <li><Link to="/cinema"><span>Cinema</span></Link></li>
          <li><Link to="/portfolio"><span>Portfolio</span></Link></li>
          <li><Link to="/about"><span>A propos</span></Link></li>
        </ul>
        <div className="search">
          <BsSearch className='searchIcon text-xl' />
        </div>
        <button><div className="little_menu">
          <FiMenu className="text-3xl" />
        </div></button>
      </div>
    </div>
  )
}

export default Navbar
