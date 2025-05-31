import type { Movie } from '../types/Movie';

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Inception',
    releaseDate: '2010',
    plot: 'Dreams within dreams.',
    cast: ['Leonardo DiCaprio'],
    director: 'Christopher Nolan',
    genres: ['Sci-Fi', 'Thriller'],
    rating: 8.8
  },
  {
    id: '2',
    title: 'Interstellar',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Interstellar',
    releaseDate: '2014',
    plot: 'Time dilation in space.',
    cast: ['Matthew McConaughey'],
    director: 'Christopher Nolan',
    genres: ['Sci-Fi', 'Drama'],
    rating: 8.6
  },
  {
    id: '3',
    title: 'The Dark Knight',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Dark+Knight',
    releaseDate: '2008',
    plot: 'Joker causes chaos in Gotham.',
    cast: ['Christian Bale'],
    director: 'Christopher Nolan',
    genres: ['Action', 'Crime'],
    rating: 9.0
  },
  {
    id: '4',
    title: 'The Matrix',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Matrix',
    releaseDate: '1999',
    plot: 'Reality is a simulation.',
    cast: ['Keanu Reeves'],
    director: 'Wachowskis',
    genres: ['Sci-Fi', 'Action'],
    rating: 8.7
  },
  {
    id: '5',
    title: 'Gladiator',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Gladiator',
    releaseDate: '2000',
    plot: 'Roman general seeks revenge.',
    cast: ['Russell Crowe'],
    director: 'Ridley Scott',
    genres: ['Action', 'Drama'],
    rating: 8.5
  },
  {
    id: '6',
    title: 'Titanic',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Titanic',
    releaseDate: '1997',
    plot: 'Love story on a doomed ship.',
    cast: ['Leonardo DiCaprio', 'Kate Winslet'],
    director: 'James Cameron',
    genres: ['Romance', 'Drama'],
    rating: 7.9
  },
  {
    id: '7',
    title: 'The Shawshank Redemption',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Shawshank',
    releaseDate: '1994',
    plot: 'Hope and friendship in prison.',
    cast: ['Tim Robbins', 'Morgan Freeman'],
    director: 'Frank Darabont',
    genres: ['Drama'],
    rating: 9.3
  },
  {
    id: '8',
    title: 'Forrest Gump',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Forrest+Gump',
    releaseDate: '1994',
    plot: 'Life of a simple man in complex times.',
    cast: ['Tom Hanks'],
    director: 'Robert Zemeckis',
    genres: ['Drama', 'Romance'],
    rating: 8.8
  },
  {
    id: '9',
    title: 'Fight Club',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Fight+Club',
    releaseDate: '1999',
    plot: 'Underground fight club turns anarchist.',
    cast: ['Brad Pitt'],
    director: 'David Fincher',
    genres: ['Drama', 'Thriller'],
    rating: 8.8
  },
  {
    id: '10',
    title: 'Avengers: Endgame',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Endgame',
    releaseDate: '2019',
    plot: 'Avengers unite for final battle.',
    cast: ['Robert Downey Jr.', 'Chris Evans'],
    director: 'Russo Brothers',
    genres: ['Action', 'Superhero'],
    rating: 8.4
  },
  {
    id: '11',
    title: 'The Godfather',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Godfather',
    releaseDate: '1972',
    plot: 'Mafia family legacy.',
    cast: ['Marlon Brando'],
    director: 'Francis Ford Coppola',
    genres: ['Crime', 'Drama'],
    rating: 9.2
  },
  {
    id: '12',
    title: 'The Godfather Part II',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Godfather+II',
    releaseDate: '1974',
    plot: 'Rise of Michael Corleone.',
    cast: ['Al Pacino'],
    director: 'Francis Ford Coppola',
    genres: ['Crime', 'Drama'],
    rating: 9.0
  },
  {
    id: '13',
    title: 'Pulp Fiction',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Pulp+Fiction',
    releaseDate: '1994',
    plot: 'Nonlinear storytelling and crime.',
    cast: ['John Travolta'],
    director: 'Quentin Tarantino',
    genres: ['Crime', 'Drama'],
    rating: 8.9
  },
  {
    id: '14',
    title: 'The Lion King',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Lion+King',
    releaseDate: '1994',
    plot: 'Simba’s journey to kingship.',
    cast: ['Matthew Broderick'],
    director: 'Roger Allers',
    genres: ['Animation', 'Drama'],
    rating: 8.5
  },
  {
    id: '15',
    title: 'Up',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Up',
    releaseDate: '2009',
    plot: 'Old man and young boy float to adventure.',
    cast: ['Ed Asner'],
    director: 'Pete Docter',
    genres: ['Animation', 'Adventure'],
    rating: 8.2
  },
  {
    id: '16',
    title: 'Coco',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Coco',
    releaseDate: '2017',
    plot: 'Young boy connects with ancestors.',
    cast: ['Anthony Gonzalez'],
    director: 'Lee Unkrich',
    genres: ['Animation', 'Family'],
    rating: 8.4
  },
  {
    id: '17',
    title: 'La La Land',
    poster: 'https://dummyimage.com/100x150/000/fff&text=La+La+Land',
    releaseDate: '2016',
    plot: 'Jazz musician and aspiring actress fall in love.',
    cast: ['Ryan Gosling', 'Emma Stone'],
    director: 'Damien Chazelle',
    genres: ['Musical', 'Romance'],
    rating: 8.0
  },
  {
    id: '18',
    title: 'Whiplash',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Whiplash',
    releaseDate: '2014',
    plot: 'Drummer and ruthless instructor battle ego and ambition.',
    cast: ['Miles Teller', 'J.K. Simmons'],
    director: 'Damien Chazelle',
    genres: ['Drama', 'Music'],
    rating: 8.5
  },
  {
    id: '19',
    title: 'The Social Network',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Social+Network',
    releaseDate: '2010',
    plot: 'Birth of Facebook and its battles.',
    cast: ['Jesse Eisenberg'],
    director: 'David Fincher',
    genres: ['Biography', 'Drama'],
    rating: 7.7
  },
  {
    id: '20',
    title: 'Parasite',
    poster: 'https://dummyimage.com/100x150/000/fff&text=Parasite',
    releaseDate: '2019',
    plot: 'Class divide in modern South Korea.',
    cast: ['Song Kang-ho'],
    director: 'Bong Joon-ho',
    genres: ['Thriller', 'Drama'],
    rating: 8.6
  }
];

export function searchMovies(query: string): Promise<Movie[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!query.trim()) return resolve(movies); // Return all if empty
        const results = movies.filter(movie =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );
        resolve(results);
      }, 500);
    });
  }  

export function getMovieDetails(id: string): Promise<Movie> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(m => m.id === id);
      if (movie) resolve(movie);
      else reject('Movie not found');
    }, 500);
  });
}
