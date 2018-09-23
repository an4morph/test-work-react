import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ active }) => {
    const menuItems = [
        { name: 'dashboard', link: '/', text: 'Дашборд' },
        { name: 'settings', link: '/settings', text: 'Настройки' },
    ]
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">SIBDEV</Link>
            <button className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarText" 
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                {
                    menuItems.map(item => {
                        return (
                            <li 
                                key={item.name}
                                className={`nav-item ${active === item.name ? 'active' : ''}`}>
                                <Link 
                                    to={item.link} 
                                    className="nav-link"
                                >{item.text}
                                </Link>
                            </li>
                        )
                    })
                }
                
                </ul>
            </div>
        </nav>
    )
}

Header.propTypes = {
    active: PropTypes.string.isRequired,
}

export default Header