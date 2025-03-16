import axios from "axios"
import React, { useEffect, useState, useRef } from 'react'

const MusicArea = () => {
  const API_URL = "https://robo-music-api.onrender.com/music/my-api";
  const [musicData, setMusicData] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null); // Track current playing audio
  const audioReference = useRef({});
    
  useEffect(() => {
    const fetchMusic = async () => {
    const response = await axios.get(API_URL);
    setMusicData(response.data); 
  };
  fetchMusic();
}, []);

const handlePlay = (id) => {
  if (currentAudio && currentAudio !== audioReference.current[id]) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  setCurrentAudio(audioReference.current[id]);
};
    

  return (
    <div className="main-container">
      <div className='sidebar'>
        <nav>
          <a href="#"><ul>Login/Sign up</ul></a>
          <a href="#"><ul>Home</ul></a>
          <a href="#"><ul>New</ul></a>
          <a href="#"><ul>Favourites</ul></a>
          <a href="#"><ul>Artists</ul></a>
        </nav>
      </div>
      <div className="music-area">
        {musicData.map((song) => (
          <div key={song.id}>
            <img
              src={song.songImage}
              alt={song.songTitle}
            />
            <h2>{song.songTitle}</h2>
            <p>Artist: {song.artistName}</p>
            <p>Album: {song.albumName || "N/A"}</p>
            <p>Release Date: {song.releaseDate}</p>
            <audio ref={(el) => (audioReference.current[song.id] = el)} onPlay={() => handlePlay(song.id)} controls>
              <source src={song.songUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
      
    </div>
  );
};


export default MusicArea