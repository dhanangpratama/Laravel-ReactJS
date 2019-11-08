import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className='navbar-brand' to='/'>Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className='nav-link' to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/register'>Register</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/about'>About</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/posts'>Posts</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' to='/users'>Users</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
)

export default Header