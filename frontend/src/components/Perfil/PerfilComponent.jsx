import React, { useState } from "react";
import { useUser } from '../UserContextF/UserContext';
import './PerfilComponent.css'
const ProfilePage = () => {
  const { user } = useUser();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  if (!user) {
    // User data is not available yet, show loading or login message
    return <div>Loading...</div>;
  }

  console.log('User:', user);

  if (!user.user.nome) {
    // User name is not available yet, show a placeholder or handle accordingly
    return <div>Loading user name...</div>;
  }

  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
      <div className="fotoMain-container">
          <img className="fotoMain" src={user.user.foto} alt="" />
        </div>
        <div className="profile-title">{`${user.user.nome} ${user.user.sobrenome}`}</div>
        <div className="profile-description">
          {/* Additional user information can be displayed here */}
        </div>
        <button className="profile-button" onClick={toggleCollapse}>
          {isCollapsed ? "Mais informações" : "Esconder"}
        </button>
        {!isCollapsed && (
          <div className="profile-details">
            <p style={{ color: "white" }}>Cargo: {user.user.cargo}</p>
            <p style={{ color: "white" }}>Planta: {user.user.planta}</p>
            <p style={{ color: "white" }}>Email: {user.user.email}</p>
            {/* Add more user details as needed */}
          </div>
        )}
        <hr className="horizontalLine" />
      </div>
    </div>
  );
};

export default ProfilePage;
