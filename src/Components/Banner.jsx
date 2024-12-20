import React from 'react'
import '../css/Banner.css'

const Banner = () => {
  function truncateDescription(string, n){
    return string?.length > n ? string.substr(0, n-1) + '...' : string
  }
  return (
    <header className='Banner'
    style={{
      backgroundSize:"cover",
      backgroundImage:`url("https://cdn.playbackonline.ca/wp/wp-content/uploads/2020/05/Screen-Shot-2020-05-04-at-1.41.10-PM.png")`,
      backgroundPosition:"center center",
    }}>
      <div className="Banner_contents">
        <h1 className="Banner_title">
          Movie Name
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
