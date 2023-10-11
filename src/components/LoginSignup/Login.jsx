import React, { useState, useEffect } from 'react';
import './Login.css'; // Import your CSS file here if needed
import { Navigate } from 'react-router-dom';
import {Switch} from "antd"

function Login() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Add the class when the component mounts
    document.body.classList.add('login-background');

    // Remove the class when the component unmounts
    return () => {
      document.body.classList.remove('login-background');
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };


  if (isLoggedIn) {
    return <Navigate to='/Main' />;
  } else {
    return (
      <body class="login-page">
        <div className="wrapper">
          <form action="">
            <h1>
              <span style={{ color: 'rgb(255, 51, 0)' }}>Info</span>APTIV
            </h1>
            <div>Entrar como:</div>

            <Switch
              defaultChecked={true}
              checkedChildren="Usuário"
              unCheckedChildren="Administrador"
            />

            <div className="input-box">
              <input type="text" placeholder="Registro" required />
              <i className="bx bxs-user"></i>
            </div>
            <div className="input-box">
              <input type="password" placeholder="Senha" required />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Lembrar senha
              </label>
              <a href="#">Esqueci minha senha</a>
            </div>

            <button type="submit" className="btn" onClick={handleLoginClick}>
              Login
            </button>

            <h1>
              <span style={{ color: 'rgb(234, 62, 24)' }}>•</span>APTIV
              <span style={{ color: 'rgb(234, 62, 24)' }}>•</span>
            </h1>
          </form>
        </div>
      </body>
    );
  }
}

export default Login;
