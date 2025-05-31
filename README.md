# Movie Search App

A React + TypeScript project that allows users to search for movies, filter by genre, release year, and rating, and manage favorites. Built as part of a frontend engineering task.

## Features

- Debounced search input
- Filters: genre, release year, and minimum rating
- Pagination (5 movies per page)
- Favorites list with localStorage persistence
- Recently viewed movies section
- Toggleable "Advanced Filters" section
- Unit tests using Vitest and Testing Library

<pre> ## Project Structure ``` src/ ├── api/ # Mock API (mockApi.ts) ├── context/ # Favorites context with reducer ├── pages/ # Home, Details, Favorites │ └── tests/ # Page-specific unit tests ├── styles/ # Global CSS styles ├── types/ # Shared TypeScript types ├── App.tsx # Main route definitions ├── main.tsx # App entry point ``` </pre>

## shell
## Setup Instructions

### 1. Clone the Repository
git clone https://github.com/sathiyavalli/movie-search-app.git

### 2. Install Dependencies
npm install

### 3. Run the App Locally
npm run dev

Then open http://localhost:5173 in your browser.

## Running Tests

This project uses Vitest with React Testing Library.

### Run all tests
npx vitest run

### Run tests in watch mode
npx vitest

## Technologies Used
- React 18
- TypeScript
- Vite
- Vitest
- @testing-library/react
- LocalStorage API
- CSS (no external libraries)

## Notes

- This project does not use a real API. All movie data is mocked in mockApi.ts.
- Filters work independently from search and are based on the full dataset.
- The UI is styled using basic CSS and Flexbox for responsiveness.

## License
This project is for demonstration and evaluation purposes. All code is open for review
