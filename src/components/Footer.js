import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer(){
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Erhalte die neusten Tipps und Indos rund um das Thema Online Dating direkt in dein E-Mail Postfach
                </p>
                <p className="footer-subscription-text">
                    Kostenlos und jederzeit kündar.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="E-Mail Adresse" className="footer-input"/>
                        <Button buttonStyle="btn--outline">Mehr Matches</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wraper">
                    <div className="footer-link-item">
                        <h2>Über uns</h2>
                        <Link to="/userreview">Erfahrungsberichte</Link>
                        <Link to="/userreview">Tinder</Link>
                        <Link to="/userreview">Das sind wir</Link>
                    </div>
                </div>
                <div className="footer-link-wraper">
                    <div className="footer-link-item">
                        <h2>Mehr Sex mit Tinder?</h2>
                        <Link to="/userreview">Erfahrungsberichte</Link>
                        <Link to="/userreview">Tinder</Link>
                        <Link to="/userreview">Das sind wir</Link>
                    </div>
                </div>
                <div className="footer-link-wraper">
                    <div className="footer-link-item">
                        <h2>Kauf unser Zeug</h2>
                        <Link to="/userreview">Erfahrungsberichte</Link>
                        <Link to="/userreview">Tinder</Link>
                        <Link to="/userreview">Das sind wir</Link>
                    </div>
                </div>
                <div className="footer-link-wraper">
                    <div className="footer-link-item">
                        <h2>Satisfyer x IYT</h2>
                        <Link to="/userreview">Erfahrungsberichte</Link>
                        <Link to="/userreview">Tinder</Link>
                        <Link to="/userreview">Das sind wir</Link>
                    </div>
                </div>
                <section className="solial-media">
                    <div className="social-madia-wrap">
                        <div className="footer-logo">
                            <Link to="/" className="social-logo">
                                IYT <i className="fas fa-magnet"></i>
                            </Link>
                        </div>
                        <small className="website-rights">IYT ©2021</small>
                        <div className="social-icons">
                            <Link className="social-icon-link Facebook" to="/" target="_blank" aria-label='Facebook'>
                                <i className="fab fa-facebook"></i>
                            </Link>
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
        )
}
export default Footer
