// app/movie/[id]/MovieDetailsClient.tsx
"use client";

import Image from "next/image";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  overview: string;
}

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetailsPage = ({ movie }: MovieDetailsProps) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Image
            src={movie.poster_path 
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : '/placeholder-movie.jpg'}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>

        <div className="w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
            {movie.release_date && (
              <p>
                Release Date: {new Date(movie.release_date).toLocaleDateString()}
              </p>
            )}
            <p>Rating: {movie.vote_average?.toFixed(1) || 'N/A'}/10</p>
          </div>

          <div className="prose max-w-none ">
            <h2 className="text-2xl font-semibold mb-3">Overview</h2>
            <p className="text-lg">
              {movie.overview || 'No overview available'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;