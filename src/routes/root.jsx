import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUserLoggedIn } from "../features/login/loginSlice";

function Root(props) {
    const userLoggedIn = useSelector(state => state.login.userLoggedIn)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/verify`, {withCredentials: true})
        .then(response => {
            dispatch(setUserLoggedIn(true))
        })
        .catch(error =>{
            dispatch(setUserLoggedIn(false))
        })
    }, [])

    return (
        <>
        <header>
            <div className="container d-flex flex-row justify-content-between align-items-center">
                <div className="social-icons d-flex justify-content-between gap-4">
                    <i className="bi bi-twitter" />
                    <i className="bi bi-threads" />
                    <i className="bi bi-instagram" />
                    <i className="bi bi-youtube" />
                </div>
                <span className="fs-3" style={{fontFamily: '"raleway", serif', fontWeight: 600}} id="logoText"><span style={{fontFamily: '"raleway", serif', fontWeight: 300}}>micro</span>reads</span>
                <button className="icon border border-0 bg-transparent d-md-none">
                    <i className="bi bi-list" />
                </button>
                <nav className="d-none d-md-block">
                <div className="d-flex justify-content-between gap-4 account-buttons align-items-center">
                    {
                        userLoggedIn ? <Link to={"/logout"}><button className="py-1">Logout</button></Link> : <Link to={"/login"}><button className="py-1">Login</button></Link>
                    }
                    
                    <Link to={"/signup"}><button className="py-1">Signup</button></Link>
                    <Link to={"/"}><i className="fa-solid fa-bag-shopping" style={{color: '#313a39', fontSize: '22px'}} /></Link>
                </div>
                </nav>
            </div>
        </header>
        <Outlet />
        <footer>
            <div className="footer-title d-flex align-items-center justify-content-center py-5">
                <span className="fs-3" style={{fontFamily: '"raleway", serif', fontWeight: 600}} id="logoText"><span style={{fontFamily: '"raleway", serif', fontWeight: 300}}>micro</span>reads</span>
            </div>
            <div className="footer-content">
                <div className="container">
                <div className="row">              
                    <div className="col-lg-3">
                    <h6 className="py-2">Learn more</h6>
                    <div className="footer-links-section">
                        <p id="footer-links">About Us</p>
                        <p id="footer-links">Press Releases</p>
                        <p id="footer-links">Environment</p>
                        <p id="footer-links">Careers</p>
                        <p id="footer-links">Privacy Policy</p>
                        <p id="footer-links">Contact Us</p>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <h6 className="py-2">Books</h6>
                    <div className="footer-links-section">
                        <p id="footer-links">Request a Book</p>
                        <p id="footer-links">Subscription</p>
                        <p id="footer-links">Delivery</p>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <h6 className="py-2">Contact Us</h6>
                    <div className="footer-links-section">
                        <p id="footer-links">Main HQ: <span id="hq">123-456-7890</span></p>
                        <p id="footer-links">Branch Office: <span id="branch">123-456-7890</span></p>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <h6 className="py-2">Social</h6>
                    <div className="footer-links-section d-flex gap-4">
                        <i className="fa-brands fa-facebook-f" style={{color: '#313a39'}} />
                        <i className="fa-brands fa-square-instagram" style={{color: '#313a39'}} />
                        <i className="fa-brands fa-x-twitter" style={{color: '#313a39'}} />
                        <i className="fa-brands fa-youtube" style={{color: '#313a39'}} />
                        <i className="fa-brands fa-wordpress" style={{color: '#313a39'}} />
                    </div>
                    </div>                      
                </div>
                <div className="bottom-line my-5">
                </div>
                <div className="credit d-flex justify-content-center">
                    <p>© 2024 Midhun Shankar | All Rights Reserved</p>
                </div>
                </div>
            </div>
        </footer>

        </>
    )
}

export default Root