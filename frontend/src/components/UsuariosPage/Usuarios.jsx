import './Usuarios.css';
import Sidebar from '../SidebarC/Sidebar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrash, FaPencilAlt, FaPlusSquare } from 'react-icons/fa';

function UsuarioPage() {
  
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    // Fetch Atalhos data when the component mounts
      axios
      .get('http://localhost:5555/Usuarios')
      .then((response) => {
          setUsuarios(response.data.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }, []);


  return (
    <div>
      <Sidebar />
      
      <div className="usuario-app-page">
        
        <Link to='/Usuarios/Create' className='mais'> 
          <FaPlusSquare size={25} />
        </Link>
    
        <h1>Usuarios cadastrados</h1>
        <div className="usuarios-container">
          {usuarios &&
            usuarios.map((usuario) => (
              <div className="usuario-item" key={usuario._id}>
                <div className="usuario-content">
                  <div className='usuario-imagem'>
                    {usuario.foto === "" || usuario.foto === null ? null : (
                      <img width={100} height={100} src={usuario.foto} alt={usuario.nome} />
                    )}
                  </div>
                  <div className='usuario-text-container'>
                    <div className='usuario-texto'>{usuario.nome} {usuario.sobrenome} {usuario.email} {usuario.cargo} {usuario.planta}  </div>
                    
                    {/*
                    <div className='link-container'>
                      <a className='link' href={usuario.link} target="_blank" rel="noopener noreferrer">
                        {usuario.link}
                      </a>
                    </div>
                    */}
                  </div>
                  <div className='usuario-icons'>
                    <div >
                      <a className='usuario-icon' href={`/Usuarios/Edit/${usuario._id}`}>
                        <FaPencilAlt />
                      </a>
                    </div>
                    <div>
                      <a className='usuario-icon' href={`/Usuarios/Delete/${usuario._id}`}>
                        <FaTrash />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default UsuarioPage;
