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
          title="FLICKHUB ORIGINALS" 
          fetchUrl={requests.fetchNetflixOriginals} 
          isLargeRow
        />
        <Rows isLargeRow title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Rows isLargeRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Rows isLargeRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Rows isLargeRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Rows isLargeRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Rows isLargeRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Rows isLargeRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
