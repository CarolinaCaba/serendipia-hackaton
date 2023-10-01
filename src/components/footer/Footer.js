import React from 'react'
import { PiTreeFill } from 'react-icons/pi'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin, FiDribbble } from 'react-icons/fi'
import './FooterStyles.css'

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <PiTreeFill className='icon' />
                        <h2>Serendipia.</h2>
                    </div>
                    <br/>
                    <Link activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' />
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Gestiones</h3>
                        <p>2018</p>
                        <p>2019</p>
                        <p>2020</p>
                        <p>2021</p>
                    </div>
                    <div className="col">
                        <h3>Mi Cuenta</h3>
                        <p>Hash Generados</p>
                        <p>Usuario</p>
                        <p>Password</p>
                        <p>Correo</p>
                    </div>
                    <div className="col">
                        <h3>Informacio</h3>
                        <p>Quienes somos?</p>
                        <p>Privacidad</p>
                        <p>Transparencia</p>
                        <p>Uso de Datos</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Terminos</p>
                        <p>Condiciones</p>
                        <p>Seguridad</p>
                        <p>Blockchain</p>
                    </div>
                    <form>
                        <h3>Unete a Serendipia</h3>
                        <input type="email" placeholder='Enter your email' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiDribbble className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
