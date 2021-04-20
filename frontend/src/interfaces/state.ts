import { Movie, Show } from './interfaces'

export interface State {
  moviesReducer: {
    popularMovies: Movie[] | [],
    similarMovies: Movie[] | []
  }
  showsReducer: {
    popularShows: Show[] | []
  }
}
