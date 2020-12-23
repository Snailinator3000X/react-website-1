import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

/* Marcel Fragen warum due Funktion nicht funktioniert*/
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('rezize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={ closeMobileMenu}>
                        {/*ImproveYourTinder Logo hier einsetzen*/}
                        <p>IYT <i className="fas fa-magnet"></i></p>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click? 'nav-menu active': 'nav-menu'}>

                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/perfectprofile' className='nav-link' onClick={closeMobileMenu}>
                                Perfect Profile
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/blog' className='nav-link' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-link' onClick={closeMobileMenu}>
                                Newsletter
                            </Link>
                        </li>         
                    </ul>

                    {button && <Button buttonStyle='btn--outline'>Only Fans</Button>}
                    {/*{button && <Button></Button>}*/}
                    
                </div>
            </nav>
        </>
    );
}

export default Navbar
