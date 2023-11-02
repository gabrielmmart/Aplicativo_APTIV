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
                gabriel.medeiros@ges.inatel.br
            </div>
            <button className="profile-button" onClick={toggleCollapse}>
                {isCollapsed ? "Mais informações" : "Esconder"}
            </button>
            {!isCollapsed && (
            <div className="profile-details">
                <p style={{ color: "white" }}>Cargo: Desenvolvedor</p>
                <p style={{ color: "white" }}>Planta: Itajuba</p>
                <p style={{ color: "white" }}>Acesso a KPI: Sim</p>
            </div>
      )}
          <hr className="horizontalLine" />
        </div>
    </div>

    
  );
}

export default Profile;
