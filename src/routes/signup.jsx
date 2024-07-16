import React, { useState } from 'react';
import axios from 'axios';

const Signup = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('password')

    function handleSignup(event){
        event.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password
        }
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/users`, data)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    return (
        <main>
            <section className='container py-3'>
                <h3 style={{fontSize: "38px"}}><span style={{fontFamily: '"raleway", serif', fontWeight: 300}} id="logoText">sign</span><span style={{fontFamily: '"raleway", serif', fontWeight: 600}}>up</span></h3>
                <form onSubmit={handleSignup}>
                    <label htmlFor="name">Name</label>
                    <input onChange={(event)=>setName(event.target.value)} type="text" id='name'/>

                    <label htmlFor="email">Email</label>
                    <input onChange={(event)=>setEmail(event.target.value)} type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input onChange={(event)=>setPassword(event.target.value)} type="password" name="password" id="password" />
                    <button type="submit">Signup</button>
                </form>
            </section>
        </main>
    );
};

export default Signup;