import React from 'react'
import MovieList from './MovieList'

const Movie = () => {
  return (
    <div><h2 className="text-2xl font-semibold mb-5">What's Popular</h2>
    <MovieList param="popular" />
    <h2 className="text-2xl font-semibold mb-5">Now Playing</h2>
    <MovieList param="now_playing" />
    <h2 className="text-2xl font-semibold mb-5">Top Rated</h2>
    <MovieList param="top_rated" />
    <h2 className="text-2xl font-semibold mb-5">Upcoming</h2>
    <MovieList param="upcoming" /></div>
    
  )
}

export default Movie