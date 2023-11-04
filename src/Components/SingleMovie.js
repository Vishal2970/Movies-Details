import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
    const {id}=useParams();
  return (
    <div>
     My Single Movie {id}
    </div>
  )
}

export default SingleMovie
