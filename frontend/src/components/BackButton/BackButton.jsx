import React from 'react'
import { Link } from 'react-router-dom'
import './BackButton.css'

const BackButton = ({ destination = '/AddAtalhos'}) => {
  return (
    <Link to={destination}>
        <button className='voltarButton'>VOLTAR</button>
    </Link>
  )
}

export default BackButton