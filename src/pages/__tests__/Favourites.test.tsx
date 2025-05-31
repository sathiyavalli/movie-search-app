import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Favorites from '../Favorites';
import { FavoritesContext } from '../../context/FavoritesContext';
import { test, expect, describe, vi, beforeEach } from 'vitest';
import type { Movie } from '../../types/Movie';

// Mock movie data
const mockFavorites: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Inception',
    releaseDate: '2010',
    plot: 'Dreams within dreams.',
    cast: ['Leonardo DiCaprio'],
    director: 'Christopher Nolan',
    genres: ['Sci-Fi'],
    rating: 8.8
  }
];

const mockDispatch = vi.fn();

function renderWithFavoritesContext(movies = mockFavorites) {
  return render(
    <FavoritesContext.Provider
      value={{
        state: {
          favorites: movies,
          recentlyViewed: [],
        },
        dispatch: mockDispatch
      }}
    >
      <MemoryRouter>
        <Favorites />
      </MemoryRouter>
    </FavoritesContext.Provider>
  );
}

describe('Favorites Page', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  test('renders empty message when no favorites', () => {
    renderWithFavoritesContext([]);
    expect(screen.getByText(/no favorite movies yet/i)).toBeInTheDocument();
  });

  test('shows a list of favorite movies', () => {
    renderWithFavoritesContext();
    expect(screen.getByText(/inception/i)).toBeInTheDocument();
    expect(screen.getByText(/remove/i)).toBeInTheDocument();
  });

  test('removes a movie from favorites on click', () => {
    renderWithFavoritesContext();
    const removeBtn = screen.getByText(/remove/i);
    fireEvent.click(removeBtn);
    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE_FAVORITE',
      payload: '1'
    });
  });

  test('shows empty recently viewed section', () => {
    renderWithFavoritesContext();
    expect(screen.getByText(/no recently viewed movies/i)).toBeInTheDocument();
  });
});
