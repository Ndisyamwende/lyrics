import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { database } from './firebase-config';
import { useNavigate } from 'react-router-dom';
// import { lyrics } from './components/lyrics'
import backgroundImage from './images/annie-spratt-nWiS2rgtVts-unsplash.jpg';

const Home = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [audioPreview, setAudioPreview] = useState('');
  const [artistDetails, setArtistDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);

  // useEffect(() => {
  //   const searchSuggestions = async () => {
  //     try {
  //       const response = await axios.get(`https://api.deezer.com/search?q=${artist} ${title}`);
  //       const tracks = response.data.data;
  //       setSuggestions(tracks);
  //     } catch (error) {
  //       console.error('Error fetching suggestions:', error);
  //     }
  //   };

  //   if (artist || title) {
  //     searchSuggestions();
  //   } else {
  //     setSuggestions([]);
  //   }
  // }, [artist, title]);

  const searchTrack = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      setLyrics(response.data.lyrics);

      const deezerResponse = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(`${artist} ${title}`)}`);
      const tracks = deezerResponse.data.data[0];
    
      if (tracks.length > 0) {
        const track = tracks[0];
        const audioPreviewUrl = track.preview || '';
        setAudioPreview(audioPreviewUrl);
      

      const artistName = track.artist.name || 'Unknown Artist';
      const albumTitle = track.album.title || 'Unknown Album';
      const releaseDate = track.album.release_date || 'Unknown Release Date';
      const albumImage = track.album.cover || '';


      console.log('Artist:', artistName);
      console.log('Album:', albumTitle);
      console.log('Release Date:', releaseDate);
      console.log('Album Image:', albumImage);


      setArtistDetails({
        name: artistName,
        album: albumTitle,
        releaseDate: releaseDate,
        albumImage: albumImage
      });



      // navigate('/lyrics');
    } else {
      setError('Track details not found for the specified track.');
    }
    } catch (error) {
      setError('Lyrics not found for the specified track.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`p-4 ${darkTheme ? 'gray-800' : 'gray-100'} text-${darkTheme ? 'white' : 'gray-700'}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
    >
      <div className="mt-8 p-4 space-x-4 rounded-sm">
        <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} placeholder="Artist" />
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <button onClick={searchTrack} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && !lyrics && <p>{error}</p>}
      {lyrics && <pre>{lyrics}</pre>}

      {audioPreview && (
        <audio controls className="my-4">
          <source src={audioPreview} type="audio/mp3" />
          Your browser does not support the audio element
        </audio>
      )}

      {Object.keys(artistDetails).length > 0 && (
        <div className="my-4">
          <h3>Artist Details</h3>
          <p>Name: {artistDetails.name}</p>
          <p>Album: {artistDetails.album}</p>
          <p>Release Date: {artistDetails.releaseDate}</p>
          {artistDetails.albumImage && (
            <img src={artistDetails.albumImage} alt="Album Cover" style={{ width: '200px', height: '200px' }} />
          )}
        </div>
      )}
{/* 
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((track, index) => (
            <li key={index}>{track.title}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Home;
