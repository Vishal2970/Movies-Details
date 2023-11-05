import React from 'react'
import { useGlobalContext } from './context'

const Movies = () => {
  const {movie} = useGlobalContext();
  return ( 
    <div>
      {movie.map((curMovie)=>{
        return(
            <div>
              <h2>{curMovie.Title}</h2>
            </div>
        );
      })}
    </div>
  )
}

export default Movies
