import './CriarUsuario.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

const Formulariousuario = () => {
  const [newUsuario, setNewUsuario] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    cargo: '',
    planta: '',
    acessoKPI: false,
    admin: false,
    foto: '',
    login: '',
    senha: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const convertFotoToBase64 = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (readerEvent) => {
        const image = new Image();
        image.src = readerEvent.target.result;
  
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
  
          // Resize the image to 500x500 pixels
          canvas.width = 500;
          canvas.height = 500;
          ctx.drawImage(image, 0, 0, 500, 500);
  
          // Convert the canvas content to base64
          const resizedBase64 = canvas.toDataURL('image/jpeg');
  
          setNewUsuario({ ...newUsuario, foto: resizedBase64 });
        };
      };
  
      reader.readAsDataURL(file);
    }
  };  

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (
      !newUsuario.nome ||
      !newUsuario.sobrenome ||
      !newUsuario.email ||
      !newUsuario.cargo ||
      !newUsuario.planta ||
      !newUsuario.login ||
      !newUsuario.senha ||
      !newUsuario.foto
    ) {
      setErrorMessage('Preencha todos os campos');
      return;
    }

    axios
      .post('http://localhost:5555/Usuarios', newUsuario)
      .then(() => {
        navigate('/Addusuarios');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className="usuario-app-form" onSubmit={handleFormSubmit}>
      <BackButton />
      <div className="usuario-oiii">
        <h2 className="usuario-texto">Entre com os dados do usuário</h2>
        <label className="usuario-texto">Foto:</label>
        <div className="usuario-image-container">
          {newUsuario.foto && <img width={100} height={100} src={newUsuario.foto} alt="User" />}
        </div>
        <div className="usuario-centered-input">
          <input accept="image/*" type="file" onChange={convertFotoToBase64} />
        </div>
                
                <label className='usuario-texto'>Nome:</label>
                <input
                type="text"
                placeholder="Nome Usuario"
                value={newUsuario.nomeApp}
                onChange={(e) => setNewUsuario({ ...newUsuario, nome: e.target.value })}
                />

                <label className='usuario-texto'>Sobrenome:</label>
                <input
                type="text"
                placeholder="Sobrenome"
                value={newUsuario.sobrenome}
                onChange={(e) => setNewUsuario({ ...newUsuario, sobrenome: e.target.value })}
                />

                <label className='usuario-texto'>Email:</label>
                <input
                type="text"
                placeholder="Email"
                value={newUsuario.email}
                onChange={(e) => setNewUsuario({ ...newUsuario, email: e.target.value })}
                />

                <label className='usuario-texto'>Login:</label>
                <input
                type="text"
                placeholder="Login"
                value={newUsuario.login}
                onChange={(e) => setNewUsuario({ ...newUsuario, login: e.target.value })}
                />
                
                <label className='usuario-texto'>Senha:</label>
                <input
                type="text"
                placeholder="Senha"
                value={newUsuario.senha}
                onChange={(e) => setNewUsuario({ ...newUsuario, senha: e.target.value })}
                />

                <label className='usuario-texto'>Cargo:</label>
                <input
                type="text"
                placeholder="Cargo"
                value={newUsuario.cargo}
                onChange={(e) => setNewUsuario({ ...newUsuario, cargo: e.target.value })}
                />

                <label className='usuario-texto'>Planta:</label>
                <input
                type="text"
                placeholder="Planta"
                value={newUsuario.planta}
                onChange={(e) => setNewUsuario({ ...newUsuario, planta: e.target.value })}
                />

                <label className='usuario-texto'>Acesso KPI:</label>
                <input
                    type="checkbox"
                    checked={newUsuario.acessoKPI}
                    onChange={(e) => setNewUsuario({ ...newUsuario, acessoKPI: e.target.checked })}
                />

                <label className='usuario-texto'>Admin:</label>
                <input
                    type="checkbox"
                    checked={newUsuario.admin}
                    onChange={(e) => setNewUsuario({ ...newUsuario, admin: e.target.checked })}
                />

                <div className="error-message">{errorMessage}</div>
                <button onClick={handleFormSubmit}>Concluir</button>
            </div>
        </form>
    );
};


export default Formulariousuario