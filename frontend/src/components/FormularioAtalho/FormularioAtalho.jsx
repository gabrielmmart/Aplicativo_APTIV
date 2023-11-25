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
        const file = e.target.files[0];
        
        if (file) {
            const reader = new FileReader();
        
            reader.onload = (readerEvent) => {
            const image = new Image();
            image.src = readerEvent.target.result;
        
            image.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
        
                // Resize the image to 500x500 pixels
                canvas.width = 500;
                canvas.height = 500;
                ctx.drawImage(image, 0, 0, 500, 500);
        
                // Convert the canvas content to base64
                const resizedBase64 = canvas.toDataURL('image/jpeg');
        
                setImage(resizedBase64);
                setNewAtalho({ ...newAtalho, imgSrc: resizedBase64 });
            };
            };
        
            reader.readAsDataURL(file);
        }
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