import React, { useState } from "react";
import './PerfilComponent.css';
import Img from './Perfil.png'

function Profile({ user }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    
    <div className="upc">
        <div className="gradiant"></div>
        <div className="profile-down">
            <img src={Img} alt="" />
            <div className="profile-title">Gabriel Medeiros</div>
            <div className="profile-description">
            </div>
            <button className="profile-button" onClick={toggleCollapse}>
                {isCollapsed ? "Mais informações" : "Esconder"}
            </button>
            {!isCollapsed && (
            <div className="profile-details">
                <p style={{ color: "white" }}>Cargo: Desenvolvedor</p>
                <p style={{ color: "white" }}>Planta: Itajuba</p>
                <p style={{ color: "white" }}>Administrador: Sim</p>
                <p style={{ color: "white" }}>gabriel.medeiros@ges.inatel.br</p>
                
            </div>
      )}
          <hr className="horizontalLine" />
        </div>
    </div>

    
  );
}

export default Profile;
