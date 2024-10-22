import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { useAuthContext } from '../../context/AuthContext'
import { message } from 'antd'

export default function Navbar() {
    const { cart, dispatch } = useAuthContext()
    const logout = () => {
        dispatch({ type: "SET_LOGGED_OUT" })
        localStorage.setItem("token", "false")
        localStorage.removeItem("User")
        message.success("You Logout Successfully")
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container">
                        <img src={logo} alt="logo" width={50} />
                        <Link to="/" className="navbar-brand menu__link">Awais Mart</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/vegetable" className="nav-link active menu__link">Vegetable</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/fruits" className="nav-link active menu__link">Fruits</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dairyProducts" className="nav-link active menu__link">Dairy Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/groceryItems" className="nav-link active menu__link">Grocery Items</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dashboard/cart" className="nav-link active menu__link">Cart <sup>{cart.length == 0 ? "" : cart.length}</sup></Link>
                                </li>
                                <li class="nav-item dropdown">
                                    <button class="nav-link menu__link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Setting</button>
                                    <ul class="dropdown-menu">
                                        <li><Link to="/dashboard/updatepassword" class="dropdown-item">Update Password</Link></li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link active menu__link">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link active menu__link">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <button className='button1' onClick={logout}>Logout</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}