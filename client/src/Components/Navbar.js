import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'

function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top py-3" id="mainNav">
            <div className="container px-4 px-lg-5">
                <Link to='/sign-kit/home' className="navbar-brand mb-0 h1">
                    <img src={logo} width="30" height="30" className="d-inline-block align-top me-3" alt="Logo" />
                    Sign Kit
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto my-2 my-lg-0">
                        <li className="nav-item"><Link to='/sign-kit/home' className="nav-link active">Home</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/convert' className="nav-link">Convert</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/learn-sign' className="nav-link">Learn Sign</Link></li>
                        <li className="nav-item"><Link to='/sign-kit/all-videos' className="nav-link">Videos</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
