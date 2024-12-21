import React from 'react'
import '../css/Banner.css'

const Banner = () => {
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
      </div>
    </header>
  )
}

export default Banner
