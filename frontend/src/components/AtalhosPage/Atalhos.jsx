import React, { useState } from 'react';
import './Atalhos.css';
import Sidebar from '../SidebarC/Sidebar';

function AtalhosPage() {
  const [showForm, setShowForm] = useState(false);
  const [newApp, setNewApp] = useState({ imgSrc: '', nomeApp: '', link: '' });
  const [apps, setApps] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedApp, setEditedApp] = useState(null);

  const handleEditApp = (app) => {
    setEditMode(true);
    setEditedApp(app);
    setNewApp({ ...app });
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setApps([...apps, newApp]);
    setNewApp({ imgSrc: '', nomeApp: '', link: '' });
    setShowForm(false);
    setEditMode(false);
    setEditedApp(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewApp({ ...newApp, profileImage: file });
  };

  return (
    <div>
      <Sidebar />
      <div className="app-page">
        <h1>Atalhos</h1>

        <button className="add-app-button" onClick={() => setShowForm(!showForm)}>
          Adicionar novo aplicativo
        </button>

        {showForm && (
          <form className="app-form" onSubmit={handleFormSubmit}>
            <h2>Entre com os dados do aplicativo</h2>
            <label>URL do ícone:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label>Nome do atalho:</label>
            <input
              type="text"
              value={newApp.nomeApp}
              onChange={(e) => setNewApp({ ...newApp, nomeApp: e.target.value })}
              required
            />
            <label>Endereço (Link):</label>
            <input
              type="text"
              value={newApp.link}
              onChange={(e) => setNewApp({ ...newApp, link: e.target.value })}
              required
            />
            <button type="submit">Concluir</button>
          </form>
        )}

        {apps.length > 0 && (
          <div className="app-list">
            <h2>Lista de aplicativos:</h2>
            <ul>
              {apps.map((app, index) => (
                <li key={index}>
                  <img src={app.imgSrc} alt="App Icon" />
                  <p>Nome do Aplicativo: {app.nomeApp}</p>
                  <p>Endereço (Link): {app.link}</p>
                  <button className="edit-button" onClick={() => handleEditApp(app)}>
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AtalhosPage;
