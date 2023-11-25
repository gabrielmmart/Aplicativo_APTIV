import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    document.body.classList.add('login-background');

    return () => {
      document.body.classList.remove('login-background');
    };
  }, []); 

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    try {
      // Check if either username or password is empty
      if (!username || !password) {
        console.error('Username and password are required');
        return;
      }
  
      // Make a POST request to your backend login route
      const response = await fetch('http://localhost:5555/Usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login: username, senha: password}),
      });
  
      if (response.ok) {
        // Successful login
        const data = await response.json();
        console.log(data);
        console.log('Data from server:', data);

        if (isAdmin) {
          if (data.user && data.user.admin === true) {
            navigate('/Admin');
          } else {
            console.log('is not allowed');
          }
        } else {
          navigate('/Main');
        }

      } else {
        console.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      // Handle other errors (e.g., network issues)
    }
  };
  

  return (
    <div className="login-page">
      <div className="wrapper">
        <form action="">
          <h1>
            <span style={{ color: 'rgb(255, 62, 24)' }}>Info<font color="white">APTIV</font></span>
          </h1>

          <label>
              <input type="checkbox" onChange={() => setIsAdmin(!isAdmin)} /> Entrar como Admin
          </label>

          <div className="input-box">
            <input type="text" placeholder="Registro" required value={username} onChange={(e) => setUsername(e.target.value)}/>
            <i className="bx bxs-user"></i>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Senha" required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="remember-forgot">
            
            <label>
              <input type="checkbox" /> Lembrar senha
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>

          <button type="submit" className="btn" onClick={handleLogin}>
            Login
          </button>

          <h1>
            <span style={{ color: 'rgb(234, 62, 24)' }}>•</span>
            <span style={{ color: 'white'}}>APTIV</span>
            <span style={{ color: 'rgb(234, 62, 24)' }}>•</span>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Login;
