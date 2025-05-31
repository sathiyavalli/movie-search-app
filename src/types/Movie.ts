export interface Movie {
    id: string;
    title: string;
    poster: string;
    releaseDate: string;
    plot: string;
    cast: string[];
    director: string;
    genres: string[];
    rating?: number; // Optional field
  }
  