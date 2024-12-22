import React, { useEffect, useState } from 'react'
import '../css/Rows.css'
import axios from '../axios';


const Rows = ({title, fetchUrl, isLargeRow = false}) => {
  const [movies, setMovies] = useState([]);

  const baseUrl = 'https://image.tmdb.org/t/p/original/'

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results);
      return request;
    }  
    fetchData()
  }, [fetchUrl])
  return (
    <div className='Rows'>
      <h2>{title}</h2>
      {movies.map((movie)=>(
        <img 
        className={`Rows__poster ${isLargeRow && 'Rows__posterLarge'}`}
        key={movie.id} 
        src={`${baseUrl}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`} alt={movie.name} />
      ))}
      

    </div>
  )
}

export default Rows
