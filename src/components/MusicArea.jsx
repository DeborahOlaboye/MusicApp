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
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Music API</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {musicData.map((song) => (
          <div key={song.id} className="border p-4 rounded-lg shadow-md">
            <img
              src={song.songImage}
              alt={song.songTitle}
              className="w-full h-40 object-cover rounded mt-2"
            />
            <h2 className="text-xl font-semibold">{song.songTitle}</h2>
            <p className="text-gray-600">Artist: {song.artistName}</p>
            <p className="text-gray-500">Album: {song.albumName || "N/A"}</p>
            <p className="text-gray-500">Release Date: {song.releaseDate}</p>
            <audio ref={(el) => (audioReference.current[song.id] = el)} onPlay={() => handlePlay(song.id)} controls className="w-full mt-2">
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