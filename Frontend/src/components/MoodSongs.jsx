import React from 'react'
import { useState } from 'react'
import "./MoodSongs.css"

const MoodSongs = () => {

  const [Songs, setSongs] = useState([
    {
        tittle:"test_tittle",
        artist:"test_artist",
        url:"test_url",
    },
    {
        tittle:"test_tittle",
        artist:"test_artist",
        url:"test_url",
    },
    {
        tittle:"test_tittle",
        artist:"test_artist",
        url:"test_url",
    },
    {
        tittle:"test_tittle",
        artist:"test_artist",
        url:"test_url",
    },
    {
        tittle:"test_tittle",
        artist:"test_artist",
        url:"test_url",
    },
  ])

  return (
    <div className='mood-songs'>
        <h2>Recommended Songs </h2>
        
        {Songs.map((song, index)=>(
            <div className='song' key={index}>
                <div className='tittle'>
                    <h3>{song.tittle}</h3>
                    <p>{song.artist}</p>
                </div>
                <div className="play-pause-button">
                     <i className="ri-pause-circle-fill"></i>
                    <i className="ri-play-circle-fill"></i>
                
                </div>
               
            </div>
        ))}

       
          
        

    </div>
  )
}

export default MoodSongs