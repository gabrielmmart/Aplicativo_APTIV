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
        
        
    
        <h1>Usuarios cadastrados
        <Link to='/Usuarios/Create' className='mais'> 
          <FaPlusSquare size={50} />
        </Link>
        </h1>
        
        <div className="usuarios-container">
          <table className="usuarios-table">
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Email</th>
                <th>Login</th> 
                <th>Senha</th>  
                <th>Cargo</th> 
                <th>Planta</th> 
                <th>KPI</th> 
                <th>Admin</th> 
              </tr>
            </thead>
            <tbody>
              {usuarios &&
                usuarios.map((usuario) => (
                  <tr key={usuario._id}>
                    <td className='usuario-imagem'>
                      {usuario.foto === "" || usuario.foto === null ? null : (
                        <img width={100} height={100} src={usuario.foto} alt={usuario.nome} />
                      )}
                    </td>
                    <td>{usuario.nome}</td>
                    <td>{usuario.sobrenome}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.login}</td>
                    <td>{usuario.senha}</td>
                    <td>{usuario.cargo}</td>
                    <td>{usuario.planta}</td>
                    <td>{usuario.acessoKPI ? 'Sim' : 'Não'}</td>
                    <td>{usuario.admin ? 'Sim' : 'Não'}</td>
                    <td>
                      <div className='usuarios-icons'>
                        <div>
                          <a className='usuario-icon' href={`/usuarios/Edit/${usuario._id}`}>
                            <FaPencilAlt />
                          </a>
                        </div>
                        <div>
                          <a className='usuario-icon' href={`/usuarios/Delete/${usuario._id}`}>
                            <FaTrash />
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsuarioPage;
