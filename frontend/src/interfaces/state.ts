import { Movie, Show } from './interfaces'

export interface State {
  moviesReducer: {
    popularMovies: Movie[] | [],
    movie: Movie,
    similarMovies: Movie[] | []
  }
  showsReducer: {
    popularShows: Show[] | []
    show: Show,
    similarShows: Show[] | []
  }
  errorReducer: {
    error: any | null
  }
}
