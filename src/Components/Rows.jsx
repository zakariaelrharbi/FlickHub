import React, { useEffect, useState } from 'react';
import '../css/Rows.css';
import axios from '../axios';

const Rows = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Rows">
      <h2>{title}</h2>
      <div className="Rows__posters">
        {movies.map((movie) => {
          // Ensure the movie has the required path before rendering
          const imagePath = isLargeRow ? movie.poster_path : movie.backdrop_path;
          if (!imagePath) return null;

          return (
            <img
              key={movie.id}
              className={`Rows__poster ${isLargeRow && 'Rows__posterLarge'}`}
              src={`${baseUrl}${imagePath}`}
              alt={movie.name || movie.title || movie.original_name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Rows;
