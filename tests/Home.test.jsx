import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from "./components/home";

describe('Home component', () => {
  test('renders Home component', () => {
    render(<Home />);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  test('searches for a track and displays lyrics', async () => {
    render(<Home />);
    const artistInput = screen.getByPlaceholderText('Artist');
    const titleInput = screen.getByPlaceholderText('Title');
    const searchButton = screen.getByText('Search');

    fireEvent.change(artistInput, { target: { value: 'ArtistName' } });
    fireEvent.change(titleInput, { target: { value: 'SongTitle' } });
    fireEvent.click(searchButton);

    
    await waitFor(() => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    // Assuming you display lyrics upon successful search
    await waitFor(() => {
      expect(screen.getByText('Lyrics for the specified track.')).toBeInTheDocument();
    });
  });

  test('adds lyrics to favorites', async () => {
    render(<Home />);
    const artistInput = screen.getByPlaceholderText('Artist');
    const titleInput = screen.getByPlaceholderText('Title');
    const searchButton = screen.getByText('Search');
    const addToFavoritesButton = screen.getByText('Add to favorites');

    fireEvent.change(artistInput, { target: { value: 'ArtistName' } });
    fireEvent.change(titleInput, { target: { value: 'SongTitle' } });
    fireEvent.click(searchButton);

    // Assuming you display lyrics upon successful search
    await waitFor(() => {
      expect(screen.getByText('Lyrics for the specified track.')).toBeInTheDocument();
    });

    fireEvent.click(addToFavoritesButton);

    
    await waitFor(() => {
      expect(screen.getByText('Lyrics added to favorites successfully!')).toBeInTheDocument();
    });
  });

  
});
