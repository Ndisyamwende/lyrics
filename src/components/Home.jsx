import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Login from './Login';
import Themes from './Themes';
import ThemeToggle from './ThemeToggle';

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

    // Fetch suggestions when the artist or title changes
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
    <div className={`flex-1 bg-${darkTheme ? 'gray-800' : 'gray-100'} p-4 text-${darkTheme ? 'white' : 'gray-700'}`}>
      {/* rest of your code */}
    </div>
  );
};

export default Home;
