import React, { useState, useEffect } from 'react';
import './AtalhosPage.css';
import Sidebar from '../SidebarC/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrash, FaPencilAlt, FaPlusSquare } from 'react-icons/fa';

function AtalhosPage() {

  const [atalhos, setAtalhos] = useState([]);
  
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


  return (
    <div>
      <Sidebar />
      
      <div className="app-page">
        
        
    
        <h1 className='titulo'>Atalhos cadastrados 
          <Link to='/Atalhos/Create' className='mais'> 
            <FaPlusSquare size={50} />
          </Link>
        </h1>
       
        <div className="atalhos-container">
          {atalhos &&
            atalhos.map((atalho) => (
              <div className="atalho-item" key={atalho._id}>
                <div className="content">
                  <div className='imagem'>
                    {atalho.imgSrc === "" || atalho.imgSrc === null ? null : (
                      <img width={100} height={100} src={atalho.imgSrc} alt={atalho.nomeApp} />
                    )}
                  </div>
                  <div className='text-container'>
                    <div className='texto'>{atalho.nomeApp}</div>
                  </div>
                  <div className='icons'>
                    <div >
                      <a className='icon' href={`/Atalhos/Edit/${atalho._id}`}>
                        <FaPencilAlt />
                      </a>
                    </div>
                    <div>
                      <a className='icon' href={`/Atalhos/Delete/${atalho._id}`}>
                        <FaTrash />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AtalhosPage;
