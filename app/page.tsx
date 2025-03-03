"use client"

import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";





export default function Home() {
  return (
    <div className="container mx-auto min-h-screen p-5 lg:px-20 lg:py-5">
      <NavBar />
      <h2 className="text-2xl font-semibold mb-5">What's Popular</h2>
      <MovieList param="popular" />
      <h2 className="text-2xl font-semibold mb-5">Now Playing</h2>
      <MovieList param="now_playing" />
      <h2 className="text-2xl font-semibold mb-5">Top Rated</h2>
      <MovieList param="top_rated" />
      <h2 className="text-2xl font-semibold mb-5">Upcoming</h2>
      <MovieList param="upcoming" />
    </div>
  );
}
