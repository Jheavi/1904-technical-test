import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import movieDbUrls from '../../constants/urls'
import { Movie } from '../../interfaces/interfaces'
import { State } from '../../interfaces/state'
import { loadPopularMovies } from '../../redux/actions/actions'
import './detail.css'

function Detail ({ dispatch, movies }: any) {
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

          </div>
        </>
          )
        : <h3>There is no movie</h3>
      }
    </div>
  )
}

function mapStateToProps ({ moviesReducer: { popularMovies } }: State) {
  return {
    movies: popularMovies
  }
}

export default connect(mapStateToProps)(Detail)
