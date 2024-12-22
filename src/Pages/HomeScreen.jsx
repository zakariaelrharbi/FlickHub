import React from 'react'
import '../css/HomeScreen.css'
import Nav from '../Components/Nav'
import Banner from '../Components/Banner'
import Rows from '../Components/Rows'
import requests from '../requests'

const HomeScreen = () => {
  return (
    <div className='HomeScreen'>
      {/* Nav */}
        <Nav/>
      {/* Banner */}
        <Banner/>
      {/* Rows */}
        <Rows 
          title="NETFLIX ORIGINALS" 
          fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow
        />
        <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
