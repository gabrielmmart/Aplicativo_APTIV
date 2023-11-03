import './FormularioAtalho.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

const FormularioAtalho = () => {
    const [atalhos, setAtalhos] = useState([]);
    const [image, setImage] = useState("");
    const [newAtalho, setNewAtalho] = useState({ nomeApp: '', imgSrc: '', link: '' });
    const navigate = useNavigate(); 
    const [errorMessage, setErrorMessage] = useState(""); 

    function convertToBase64(e) {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
            setNewAtalho({ ...newAtalho, imgSrc: reader.result });
        };
        reader.onerror = error => {
            console.log("Error", error);
        };
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!newAtalho.nomeApp || !newAtalho.imgSrc || !newAtalho.link) {
            setErrorMessage("Preencha todos os campos");
            return;
        }

        axios
        .post('http://localhost:5555/Atalhos', newAtalho)
        .then((response) => {
            setAtalhos([...atalhos, response.data]);
            navigate('/AddAtalhos');
        })
        .catch((error) => {
            console.log(error);
        });
      };

    return (
        
        <form className="app-form" onSubmit={handleFormSubmit}>

            <BackButton />
            <div className='oiii'>
                <h2 className='texto'>Entre com os dados do aplicativo</h2>
                <label className='texto'>Ícone:</label>
                
                <div className="image-container">
                    {image === "" || image === null ? "" : <img width={100} height={100} src={image} />}
                </div>
                <div className="centered-input">
                <input
                    accept="image/*" 
                    type="file" 
                    onChange={convertToBase64}
                />
                </div>
                <label className='texto'>Nome do atalho:</label>
                <input
                type="text"
                placeholder="Nome App"
                value={newAtalho.nomeApp}
                onChange={(e) => setNewAtalho({ ...newAtalho, nomeApp: e.target.value })}
                />
                <label className='texto'>Endereço (Link):</label>
                <input
                type="text"
                placeholder="Link"
                value={newAtalho.link}
                onChange={(e) => setNewAtalho({ ...newAtalho, link: e.target.value })}
                />
                <div className="error-message">{errorMessage}</div> {/* Display error message */}
                <button onClick={handleFormSubmit}>Concluir</button>
            </div>
        </form>
    );
};


export default FormularioAtalho