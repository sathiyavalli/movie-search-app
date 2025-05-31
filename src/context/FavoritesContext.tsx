import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { Movie } from '../types/Movie';

interface State {
  favorites: Movie[];
  recentlyViewed: Movie[];
}

type Action =
  | { type: 'ADD_FAVORITE'; payload: Movie }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'ADD_RECENT'; payload: Movie };

const initialState: State = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  recentlyViewed: JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorites.some(m => m.id === action.payload.id)) return state;
      return { ...state, favorites: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return { ...state, favorites: state.favorites.filter(m => m.id !== action.payload) };
    case 'ADD_RECENT':
      const updated = [action.payload, ...state.recentlyViewed.filter(m => m.id !== action.payload.id)].slice(0, 3);
      return { ...state, recentlyViewed: updated };
    default:
      return state;
  }
}

export const FavoritesContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null
});

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(state.favorites));
    localStorage.setItem('recentlyViewed', JSON.stringify(state.recentlyViewed));
  }, [state]);

  return (
    <FavoritesContext.Provider value={{ state, dispatch }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export function useFavorites() {
  return useContext(FavoritesContext);
}
