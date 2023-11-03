import React, { useState } from 'react'
import BackButton from '../BackButton/BackButton'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './DeleteAtalho.css'

const DeleteAtalho = () => {
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleDeleteBook = () => {
      axios
        .delete(`http://localhost:5555/Atalhos/${id}`)
        .then(() => {
          navigate('/addAtalhos');
        })
        .catch((error) => {
          // alert('An error happened. Please Chack console');
          console.log(error);
        });
    };
    
    return (
      <div className='p-4'>
        <BackButton />
        <h1 className='aaaa'>Deletar atalho?</h1>
        <div className='aaa'>
          <h3 className='aa'>Tem certeza que quer deletar este atalho?</h3>
  
          <button
            className='a'
            onClick={handleDeleteBook}
          >
            Sim, delete-o
          </button>
        </div>
      </div>
    )
}

export default DeleteAtalho