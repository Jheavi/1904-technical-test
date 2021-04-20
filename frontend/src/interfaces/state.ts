import { Movie, Show } from './interfaces'

export interface State {
  moviesReducer: {
    popularMovies: Movie[] | []
  }
  showsReducer: {
    popularShows: Show[] | []
  }
}
