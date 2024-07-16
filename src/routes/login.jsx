import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserLoggedIn } from '../features/login/loginSlice';

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('password')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleLogin(event){
        event.preventDefault()
        const data = {
            email: email,
            password: password
        }
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, data, {withCredentials: true})
        .then(response => {
            dispatch(setUserLoggedIn(true))
            navigate('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <main>
            <section className='container py-3'>
                <h3 style={{fontSize: "38px"}}><span style={{fontFamily: '"raleway", serif', fontWeight: 300}} id="logoText">log</span><span style={{fontFamily: '"raleway", serif', fontWeight: 600}}>in</span></h3>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input onChange={(event)=>setEmail(event.target.value)} type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input onChange={(event)=>setPassword(event.target.value)} type="password" name="password" id="password" />
                    <button type="submit">Login</button>
                </form>
            </section>
        </main>
    );
};

export default Login;