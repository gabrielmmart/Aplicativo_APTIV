import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Teste.css'

const DataPage = () => {
    const [atalhos, setAtalhos] = useState([]);
    const [image, setImage] = useState("");
    const [newAtalho, setNewAtalho] = useState({ nomeApp: '', imgSrc: '', link: '' });

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

    return (
        <div className='TUDO'>
            <div>
                <input accept="image/*" type="file" onChange={convertToBase64} />
                {image === "" || image === null ? "" : <img width={100} height={100} src={image} />}
            </div>

            <div>
                <h2>Add New Atalho</h2>
                <input
                    type="text"
                    placeholder="Nome App"
                    value={newAtalho.nomeApp}
                    onChange={(e) => setNewAtalho({ ...newAtalho, nomeApp: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Link"
                    value={newAtalho.link}
                    onChange={(e) => setNewAtalho({ ...newAtalho, link: e.target.value })}
                />
                <button onClick={handleNewAtalhoSubmit}>Add Atalho</button>
            </div>

        </div>
    );
};

export default DataPage;
