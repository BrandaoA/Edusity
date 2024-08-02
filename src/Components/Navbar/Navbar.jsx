import './Navbar.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { useEffect } from 'react';
const Navbar = () => {

  {/** to change navbar on scroll */}
  const [sticky, setSticky] = useState(false);

  useEffect (() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false)
    })
  },[])
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li>
          <button className='btn'>Contact Us</button>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar