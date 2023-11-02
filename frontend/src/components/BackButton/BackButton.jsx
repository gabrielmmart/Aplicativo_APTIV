import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ destination = '/AddAtalhos'}) => {
  return (
    <Link to={destination}>
        <button>VOLTAR</button>
    </Link>
  )
}

export default BackButton