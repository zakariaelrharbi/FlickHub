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
          
        </h1>
      </div>
    </header>
  )
}

export default Banner
