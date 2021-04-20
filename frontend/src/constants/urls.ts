const generalUrl = 'https://api.themoviedb.org/3'
const apiKeyFormat = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=ES`

const movieDbUrls = {
  popularFilms: `${generalUrl}/movie/popular?${apiKeyFormat}`,
  movieDetail: (movieId: string) => `${generalUrl}/movie/${movieId}?${apiKeyFormat}`,
  similarMovies: (movieId: string) => `${generalUrl}/movie/${movieId}/similar?${apiKeyFormat}`,
  popularShows: `${generalUrl}/tv/popular?${apiKeyFormat}`,
  showDetail: (showId: string) => `${generalUrl}/tv/${showId}?${apiKeyFormat}`,
  similarShows: (showId: string) => `${generalUrl}/tv/${showId}/similar?${apiKeyFormat}`,
  images: 'https://image.tmdb.org/t/p/w500',
  bigImages: 'https://image.tmdb.org/t/p/w1280'
}

export default movieDbUrls
