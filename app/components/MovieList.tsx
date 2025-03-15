"use client"

import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";


export interface Movie {
  poster_path: string;
  backdrop_path: string;
  title: string;
  release_date: string;
  id: number;
  overview: string;
}

interface MovieListProps {
  movies?: Movie[];
  category?: string;
}

const api_Url = "https://api.themoviedb.org/3/movie/";
const api_Key = process.env.NEXT_PUBLIC_API_KEY;

const MovieList = ({ movies, category }: MovieListProps) => {
  const [fetchedMovies, setFetchedMovies] = useState<Movie[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (category) {
          const response = await axios.get(
            `${api_Url}${category}?api_key=${api_Key}`
          );
          setFetchedMovies(response.data.results);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [category]);

   // Check Scroll Position
   const checkScroll = () => {
    if (scrollRef.current) {
      setScrollStart(scrollRef.current.scrollLeft === 0);
      setScrollEnd(
        scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
      );
    }
  };
  const displayedMovies = movies?.length ? movies : fetchedMovies;

  return (
    <div className="relative w-full">

{/* Indicators */}
{!scrollStart && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-black/60 to-transparent h-full w-12 z-10 pointer-events-none"></div>
      )}
      {!scrollEnd && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-black/60 to-transparent h-full w-12 z-10 pointer-events-none"></div>
      )}
      <div ref={scrollRef}
        onScroll={checkScroll}
        className="overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
           <div
        
        className="flex gap-5 w-max p-4"
      >
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="w-48 shrink-0">
            <Link href={`/movie/${movie.id}`} className="w-full rounded-lg shadow-lg">
              <img
              
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
               
                alt={movie.title}
                className="w-full rounded-lg shadow-lg object-cover"
              />
            </Link>
            <h3 className="text-sm mt-2 font-semibold text-wrap">
              {movie.title}
            </h3>
            <p className="text-xs text-gray-500">{movie.release_date}</p>
          </div>
        ))}
      </div>
        </div>

    </div>
  );
};

export default MovieList;
