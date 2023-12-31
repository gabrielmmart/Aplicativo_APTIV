import React, { useEffect, useState } from 'react';
import './Main.css';
import Profile from '../Perfil/PerfilComponent' 
import axios from 'axios';
import { useUser } from '../UserContextF/UserContext';

const Main = () => {
    const { user } = useUser();
    const [atalhos, setAtalhos] = useState([]);

    useEffect(() => {
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
      <section className="main container section">
        <Profile />
        <div className="secContent">
          {atalhos &&
            atalhos.map(({ _id, imgSrc, nomeApp, link }) => (
              // Check if the shortcut is for KPI and the user has acessoKPI
              (nomeApp === 'KPI' && user.user.acessoKPI) || nomeApp !== 'KPI' ? (
                <div key={_id} className="singleDestination">
                  <div className="imageDiv">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <img src={imgSrc} alt={nomeApp} />
                    </a>
                  </div>
                  <div className="nomeDiv" style={{ color: "white" }}>
                    <h4>{nomeApp}</h4>
                  </div>
                </div>
              ) : null
            ))}
        </div>
      </section>
    );
    
}

export default Main;
