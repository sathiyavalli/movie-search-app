import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { test, expect } from 'vitest';
import Details from '../Details';
import { FavoritesProvider } from '../../context/FavoritesContext';

test('renders details and allows adding to favorites', async () => {
  render(
    <FavoritesProvider>
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    </FavoritesProvider>
  );

  await waitFor(() => {
    expect(screen.getByText(/inception/i)).toBeInTheDocument();
  });

  const addBtn = screen.getByText(/add to favorites/i);
  expect(addBtn).toBeInTheDocument();
});
