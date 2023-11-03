import React, { useState, useEffect } from 'react';
import './AtalhosPage.css';
import Sidebar from '../SidebarC/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AtalhosPage() {
  const [showForm, setShowForm] = useState(false);
  const [atalhos, setAtalhos] = useState([]);
  const [image, setImage] = useState("");
  const [newAtalho, setNewAtalho] = useState({ nomeApp: '', imgSrc: '', link: '' });
  const [editingAtalho, setEditingAtalho] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  
  useEffect(() => {
    // Fetch Atalhos data when the component mounts
      axios
      .get('http://localhost:5555/Atalhos')
      .then((response) => {
          setAtalhos(response.data.data);
      })
      .catch((error) => {
          console.log(error);
      });
  }, []);


  return (
    <div>
      <Sidebar />
      
      <div className="app-page">

        <Link to='/Atalhos/Create'>
          <button className='add-app-button'>Criar novo atalho</button>
        </Link>

      <h1>Atalhos cadastrados</h1>
        <div className="atalhos-container">
          {atalhos &&
              atalhos.map((atalho) => (
                <div className="atalho-item" key={atalho._id}>                
                  {atalho.imgSrc === "" || atalho.imgSrc === null ? null : (
                    <img width={100} height={100} src={atalho.imgSrc} alt={atalho.nomeApp} />
                  )}
                  <p>{atalho.nomeApp}</p>
                  <a href={atalho.link} target="_blank" rel="noopener noreferrer">
                    {atalho.link}
                  </a>
                  <p>
                    <Link to={`/Atalhos/Edit/${atalho._id}`}>
                      <button className='botaoEditar'>Editar</button>
                    </Link> 
                    <Link to={`/Atalhos/Delete/${atalho._id}`}>
                      <button className='botaoDeletar'>deletar</button>
                    </Link> 
                  </p>
                  
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}

export default AtalhosPage;
