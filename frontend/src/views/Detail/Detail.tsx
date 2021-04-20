import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import ItemListDetail from '../../components/ItemListDetail/ItemListDetail'
import movieDbUrls from '../../constants/urls'
import { Movie } from '../../interfaces/interfaces'
import { State } from '../../interfaces/state'
import { loadPopularMovies, loadSimilarMovies } from '../../redux/actions/actions'
import './detail.css'

function Detail ({ dispatch, movies, similarMovies }: any) {
  const { id }: { id: string} = useParams()
  const [movie, setMovie] = useState(movies.find((movie: Movie) => movie.id === +id))
  console.log(movie)

  useEffect(() => {
    if (movie?.id !== +id) {
      setMovie(movies.find((movie: Movie) => movie.id === +id))
    }
  }, [id, movies])

  useEffect(() => {
    if (!movies || !movies.length) {
      dispatch(loadPopularMovies())
    }
    dispatch(loadSimilarMovies(id))
  }, [])

  return (
    <div className="detail-container">
      {movie
        ? (
        <>
          <div className="img-container">
            <img src={`${movieDbUrls.bigImages}${movie.backdrop_path}`} alt=""/>
          </div>
          <div className="title-gradient">
            <div className="gradient"></div>
            <h1>{movie.title}</h1>
          </div>
          <div className="average-overview">
            <span className="average">Vote average: <span className="average__number">{movie.vote_average}</span></span>
            <span className="overview">{movie.overview}</span>
          </div>
          <div className="similar-movies">
            {similarMovies.map((movie: Movie) => (
              <ItemListDetail item={movie} key={movie.id} showAdditionalInfo={false}/>
            ))}
          </div>
        </>
          )
        : <h3>There is no movie</h3>
      }
    </div>
  )
}

function mapStateToProps ({ moviesReducer: { popularMovies, similarMovies } }: State) {
  return {
    movies: popularMovies,
    similarMovies
  }
}

export default connect(mapStateToProps)(Detail)
