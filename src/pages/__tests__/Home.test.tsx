import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../Home';
import { test, expect, describe} from 'vitest';
import { MemoryRouter } from 'react-router-dom';

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('Home Page', () => {
  test('renders advanced filters toggle', () => {
    renderWithRouter(<Home />);
    const toggleBtn = screen.getByText(/show advanced filters/i);
    expect(toggleBtn).toBeInTheDocument();
  });

  test('shows filters when toggled', () => {
    renderWithRouter(<Home />);
    fireEvent.click(screen.getByText(/show advanced filters/i));
    expect(screen.getByPlaceholderText(/enter movie title/i)).toBeInTheDocument();
    expect(screen.getByText(/genres/i)).toBeInTheDocument();
  });

  test('search returns results', async () => {
    renderWithRouter(<Home />);
    fireEvent.click(screen.getByText(/show advanced filters/i));
    fireEvent.change(screen.getByPlaceholderText(/enter movie title/i), {
      target: { value: 'inception' },
    });

    // Use function matcher to handle split text nodes
    const movieTitle = await screen.findByText(/inception/i, {}, { timeout: 2000 });
    expect(movieTitle).toBeInTheDocument();
  
  });
});