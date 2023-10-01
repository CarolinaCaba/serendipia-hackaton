import React, { useState } from 'react'
import { PiTreeFill } from 'react-icons/pi'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <PiTreeFill className='icon' />
                    <h1>Serendipia</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Principal</Link></li>
                    <li><Link to='/recovery'>Examenes</Link> </li>
                    <li><Link to='/cloud'>Materias</Link></li>
                    <li><Link to='/contact'>Contacto</Link></li>
                    <button className='buttonprimary'>Ingresar</button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
