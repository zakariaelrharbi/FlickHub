import React, { useState, useEffect } from 'react'
import '../css/Banner.css'
import axios from '../axios';
import Requests from '../requests';

const Banner = () => {
  const [Movie, SetMovie]= useState([]);

  useEffect(()=>{
    async function fetchData() {
      const request = await axios.get(Requests.fetchNetflixOriginals);
      SetMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request;
    }
    fetchData();
  }, [])
  console.log(Movie);
  function truncateDescription(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...' : string
  }
  return (
    <header className='Banner'
    style={{
      backgroundSize:"cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${Movie?.backdrop_path}")`,
      backgroundPosition:"center center",
    }}>
      <div className="Banner_contents">
        <h1 className="Banner_title">
          {Movie?.title || Movie?.name || Movie?.original_name}
        </h1>
        <div className="Banner_buttons">
          <button className='Banner_button'>Play</button>
          <button className='Banner_button'>My List</button>
        </div>
        <h1 className="Banner_description">
          {truncateDescription("this is the description this is the description this is the description this is the description this is the description this is the description this is the descriptionthis is the descriptionthis is the description " , 120)}
        </h1>
      </div>
      <div className="banner--fadeBottom"/>
    </header>
  )
}

export default Banner
