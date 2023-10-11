import React, { useState } from 'react';
import './Atalhos.css';
import Sidebar from '../SidebarC/Sidebar';

function AtalhosPage() {
  const [selectedUser, setSelectedUser] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', isAdmin: false });
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
    
  const userOptions = [];

  const handleEditUser = (user) => {
    // Enable editing mode and set the user to edit
    setEditMode(true);
    setEditedUser(user);
    setNewUser({ ...user }); // Copy the user data for editing
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setUsers([...users, newUser]);
    setNewUser({ firstName: '', lastName: '', email: '', planta: '', isAdmin: false });
    setShowForm(false);
    setEditMode(false);
    setEditedUser(null);
  };

  return (
    <div>
        <Sidebar />
        <div className="user-page">
        <h1>Atalhos</h1>

        {selectedUser && (
            <div className="user-info">
            <h2>Selected User Information</h2>
            <p>First Name: {selectedUser}</p>
            {users.map((user, index) => (
                <div key={index}>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Planta: {user.planta}</p>
                <p>Is Admin: {user.isAdmin ? 'Yes' : 'No'}</p>
                </div>
            ))}
            </div>
        )}

        <button className="add-user-button" onClick={() => setShowForm(!showForm)}>
            Adicionar novo atalho
        </button>

        {showForm && (
            <form className="user-form" onSubmit={handleFormSubmit}>
            <h2>Entre com os dados</h2>
            <label>Primeiro nome:</label>
            <input
                type="text"
                value={newUser.firstName}
                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                required
            />
            <label>Segundo nome:</label>
            <input
                type="text"
                value={newUser.lastName}
                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                required
            />
            <label>Email:</label>
            <input
                type="email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
            />
            <label>Planta:</label>
            <input
                type="planta"
                value={newUser.planta}
                onChange={(e) => setNewUser({ ...newUser, planta: e.target.value })}
                required
            />
            <label>
                Pode ver KPI:
                <input
                type="checkbox"
                checked={newUser.isAdmin}
                onChange={(e) => setNewUser({ ...newUser, isAdmin: e.target.checked })}
                />
            </label>
            <button type="submit">Concluir</button>
            </form>
        )}

        {users.length > 0 && (
            <div className="user-list">
            <h2>Lista de usuários:</h2>
            <ul>
                {users.map((user, index) => (
                <li key={index}>
                    {user.firstName} {user.lastName} (Email: {user.email}, Planta:{user.planta} KPI: {user.isAdmin ? 'Sim' : 'Não'})
                    <button className="edit-button" onClick={() => handleEditUser(user)}></button>
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
