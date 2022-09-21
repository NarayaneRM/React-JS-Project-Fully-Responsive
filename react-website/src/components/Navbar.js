import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/*aqui estou escolhendo a logo do site*/}
                    <Link to='/' className='navbar-logo'>
                        TRVL<i className='fab fa-typo3' />
                    </Link>
                    {/*aqui estou escolhendo a logo do menu suspenso*/}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    {/*Montando o meu menu*/}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>{/*vou garantir que o menu suma depois de clicar em uma página*/}
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                            <li className='nav-item'>
                                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Sign-up
                                </Link>
                            </li>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar

