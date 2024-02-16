 import React, { useState, useEffect } from 'react';
 import axios from 'axios';
 import Login from './Login';
 import Themes from './Themes';
 import ThemeToggle from './ThemeToggle';
 import backgroundImage from './images/lum3n--RBuQ2PK_L8-unsplash.jpg'



 const Home = () => {
   const [title, setTitle] = useState('');
   const [artist, setArtist] = useState('');
   const [lyrics, setLyrics] = useState('');
   const [audioPreview, setAudioPreview] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');
   const [suggestions, setSuggestions] = useState([]);
   const [darkTheme, setDarkTheme] = useState(false);

   useEffect(() => {
     const searchSuggestions = async () => {
       try {
         const response = await axios.get(`https://api.deezer.com/search?q=${artist} ${title}`);
         const tracks = response.data.data;
         const trackTitles = tracks.map((track) => track.title);
         setSuggestions(trackTitles);
       } catch (error) {
         console.error('Error fetching suggestions:', error);
       }
     };

    
     if (artist || title) {
       searchSuggestions();
     } else {
       setSuggestions([]);
     }
   }, [artist, title]);

   const searchTrack = async () => {
       setLoading(true);
     setError('');

     try {
       const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
       setLyrics(response.data.lyrics);

       const deezerResponse = await axios.get(`https://api.deezer.com/search?q=${artist} ${title}`);
       const track = deezerResponse.data.data[0];
       const audioPreviewUrl = track ? track.preview : '';
       setAudioPreview(audioPreviewUrl);
     } catch (error) {
      setError('Lyrics not found for the specified track.');
     } finally {
       setLoading(false);
     }
   };

   return (
     <div className={`p-4 ${darkTheme ? 'gray-800' : 'gray-100'} text-${darkTheme ? 'white' : 'gray-700'}`}
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
         <button onClick={searchTrack} className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">Search</button> 
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

       {suggestions.length > 0 && (
         <ul>
           {suggestions.map((suggestion, index) => (
             <li key={index}>{suggestion}</li>
           ))}
         </ul>
       )}
     </div>
   );
 };

 export default Home;