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

  function convertToBase64(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
        setImage(reader.result);
        if (editingAtalho) {
          // Se estiver editando, atualizar o atalho
          setEditingAtalho({ ...editingAtalho, imgSrc: reader.result });
        } else {
          // Se estiver criando, criar atalho
          setNewAtalho({ ...newAtalho, imgSrc: reader.result });
        }
    };
    reader.onerror = error => {
        console.log("Error", error);
    };
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editingAtalho) {
      // If editing, send a PUT request to update the Atalho
      axios
          .put(`http://localhost:5555/Atalhos/${editingAtalho._id}`, editingAtalho)
          .then((response) => {
              // Update the atalhos state with the edited Atalho
              setAtalhos(atalhos.map(item => (item._id === editingAtalho._id ? editingAtalho : item)));
              setEditingAtalho(null); // Clear the editing state
          })
          .catch((error) => {
              console.log(error);
          });
    } else {
      // If creating, send a POST request to create a new Atalho
      axios
          .post('http://localhost:5555/Atalhos', newAtalho)
          .then((response) => {
              // Update the atalhos state with the newly created Atalho
              setAtalhos([...atalhos, response.data]);
              // Reset the form
              setNewAtalho({ nomeApp: '', imgSrc: '', link: '' });
              setImage(""); // Clear the image
          })
          .catch((error) => {
              console.log(error);
          });
    }
    setShowForm(false);
  };

  const handleNewAtalhoSubmit = () => {
      // Send the new Atalho to the server
      axios
      .post('http://localhost:5555/Atalhos', newAtalho)
      .then((response) => {
          // Update the atalhos state with the newly created Atalho
          setAtalhos([...atalhos, response.data]);
          // Reset the form
          setNewAtalho({ nomeApp: '', imgSrc: '', link: '' });
          setImage(""); // Clear the image
      })
      .catch((error) => {
          console.log(error);
      });
  };

  const handleEdit = (atalhoToEdit) => {
    // Set the editingAtalho state to the Atalho being edited
    setEditingAtalho(atalhoToEdit);
    // Populate the form fields with the data of the Atalho being edited
    setNewAtalho({ nomeApp: atalhoToEdit.nomeApp, imgSrc: atalhoToEdit.imgSrc, link: atalhoToEdit.link });
    setShowForm(true);
  };
  

  return (
    <div>
      <Sidebar />
      
      <div className="app-page">

        <button className="add-app-button" onClick={() => setShowForm(!showForm)}>
          Adicionar novo atalho
        </button>

        <Link to='/Atalhos/Create'>
          <button className='add-app-button'>REDIRECIONAR AO FORM</button>
        </Link>

        {showForm && (
          <form className="app-form" onSubmit={handleFormSubmit}>
            <h2>Entre com os dados do aplicativo</h2>
            <label>Ícone:</label>
            <input
              accept="image/*" 
              type="file" 
              onChange={convertToBase64}
            />
            {image === "" || image === null ? "" : <img width={100} height={100} src={image} />}
            <label>Nome do atalho:</label>
            <input
              type="text"
              placeholder="Nome App"
              value={newAtalho.nomeApp}
              onChange={(e) => setNewAtalho({ ...newAtalho, nomeApp: e.target.value })}
            />
            <label>Endereço (Link):</label>
            <input
              type="text"
              placeholder="Link"
              value={newAtalho.link}
              onChange={(e) => setNewAtalho({ ...newAtalho, link: e.target.value })}
            />
            <button type="submit">Concluir</button>
          </form>
        )}


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
