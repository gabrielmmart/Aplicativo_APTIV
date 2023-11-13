import React, { useState } from 'react'
import BackButton from '../BackButton/BackButton'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import './DeleteUsuario.css'

const DeleteUsuario = () => {
    const navigate = useNavigate();
    const { id } = useParams();
  
    const handleDeleteBook = () => {
      axios
        .delete(`http://localhost:5555/Usuarios/${id}`)
        .then(() => {
          navigate('/addUsuarios');
        })
        .catch((error) => {
          // alert('An error happened. Please Chack console');
          console.log(error);
        });
    };
    
    return (
      <div className='p-4'>
        <BackButton />
        <h1 className='aaaa'>Deletar usuário?</h1>
        <div className='aaa'>
          <h3 className='aa'>Tem certeza que quer deletar este usuário?</h3>
  
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

export default DeleteUsuario