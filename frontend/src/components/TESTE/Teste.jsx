// React login component

import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            // Make a POST request to your backend login route
            const response = await fetch('http://localhost:5555/Usuarios/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login: username, senha: password }),
            });

            const data = await response.json();
            console.log(data); // You will get the JWT token here

            // Handle the token in your application (e.g., store it in local storage, redirect to another page)
        } catch (error) {
            console.error('Error during login:', error.message);
            // Handle error (e.g., show an error message to the user)
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
