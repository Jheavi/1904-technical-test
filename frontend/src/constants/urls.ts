const generalUrl = 'https://api.themoviedb.org/3'
const apiKeyFormat = `api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=ES`

const movieDbUrls = {
  popularFilms: `${generalUrl}/movie/popular?${apiKeyFormat}`,
  popularShows: `${generalUrl}/tv/popular?${apiKeyFormat}`,
  images: 'https://image.tmdb.org/t/p/w500'
}

export default movieDbUrls
