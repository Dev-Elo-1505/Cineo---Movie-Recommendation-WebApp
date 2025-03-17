import React from 'react'
import MovieList from './MovieList'

const Movie = () => {
  const categories = [
    { title: "What's Popular", category: "popular" },
    { title: "Now Playing", category: "now_playing" },
    { title: "Top Rated", category: "top_rated" },
    { title: "Upcoming", category: "upcoming" }
  ];

  return (
     <div className="space-y-8">
      {categories.map((section) => (
        <section key={section.category}>
          <h2 className="text-2xl font-semibold mb-4 px-4">
            {section.title}
          </h2>
          <MovieList category={section.category} />
        </section>
      ))}
    </div>
    
  )
}

export default Movie