import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../features/login/loginSlice';
import { useNavigate } from 'react-router-dom';

const Logout = (props) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, {withCredentials: true})
        .then(response => {
            dispatch(setUserLoggedIn(false))
            navigate('/login')
        })
        .catch(error =>{
            console.log("Could not logout")
        })
    }, [])


    return (
        <main>
            <section className='d-flex flex-row align-items-center justify-content-center '>
                <h3>Logging out...</h3>
            </section>
        </main>
    );
};

export default Logout;